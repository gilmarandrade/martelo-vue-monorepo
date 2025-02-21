import { readonly, ref } from "vue"
import { useEventsRecorder } from "./useEventsRecorder"

const isPlaying = ref(false)

const pointer = ref({
    x: 0,
    y: 0
})

const currentIndex = ref<number>(-1)

const timerId = ref()

export function useEventsReplay() {

    const { history } = useEventsRecorder()

    function load() {
        // selectEvent(0)
    }

    function restart() {
        clearTimeout(timerId.value)
        isPlaying.value = true
    }

    function resume() {
        isPlaying.value = true
        nextTick()
    }

    function pause() {
        isPlaying.value = false
    }

    function stop() {
        clearTimeout(timerId.value)
        currentIndex.value = -1
        isPlaying.value = false
    }

    function updatePointer(index: number) {
        // clearTimeout(timerId.value)
        // const event = history.value[index]
        // console.log(index, `#${index+ 1}`)

        // currentIndex.value = index
        const current = history.value[index]
        pointer.value = {
            x: current.offsetX,
            y: current.offsetY,
        }
    }

    function nextTick() {
        const current = currentIndex.value + 1

        if(current >= history.value.length) {
            // console.log('stop', current, history.value.length)
            stop()
        } else {
            updatePointer(current)
            const next = currentIndex.value + 2
            const delay = (history.value[next]?.timeStamp - history.value[current]?.timeStamp) || 0
            const velocity = 1
            // console.log(
            //     "current:", current,
            //     `#${current+1}`,
            //     "next:", next,
            //     history.value[current]?.timeStamp, 
            //     history.value[next]?.timeStamp,
            //     delay
            // )
          
            currentIndex.value++
            timerId.value = setTimeout(nextTick, delay * velocity);
           
        }


    }

    return {
        load,
        restart,
        resume,
        pause,
        stop,
        selectEvent: updatePointer,
        isPlaying: readonly(isPlaying),
        history,
        currentIndex: readonly(currentIndex),
        pointer: readonly(pointer),
    }
}