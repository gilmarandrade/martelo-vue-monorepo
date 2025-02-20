import { readonly, ref } from "vue"
import { useEventsRecorder } from "./useEventsRecorder"

const isPlaying = ref(false)

const pointer = ref({
    x: 0,
    y: 0
})

const currentIndex = ref<number>(0)

const timerId = ref()

export function useEventsReplay() {

    const { history } = useEventsRecorder()

    function load() {
        selectEvent(0)
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
        isPlaying.value = false
    }

    function selectEvent(index: number) {
        clearTimeout(timerId.value)
        const event = history.value[index]
        console.log(`#${index + 1}`, event)

        currentIndex.value = index
        const current = history.value[currentIndex.value]
        pointer.value = {
            x: current.offsetX,
            y: current.offsetY,
        }
    }

    function nextTick() {
        timerId.value = setTimeout(() => {
            if(currentIndex.value + 1 >= history.value.length) {

            } else {
                currentIndex.value++
                selectEvent(currentIndex.value)
                nextTick()
            }
        }, 300);
    }

    return {
        load,
        restart,
        resume,
        pause,
        stop,
        selectEvent,
        isPlaying: readonly(isPlaying),
        history,
        currentIndex: readonly(currentIndex),
        pointer: readonly(pointer),
    }
}