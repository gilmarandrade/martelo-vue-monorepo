import { readonly, ref } from "vue"
import { useEventsRecorder } from "./useEventsRecorder"

const isPlaying = ref(false)

const pointer = ref({
    x: 0,
    y: 0
})

const currentIndex = ref<number>(0)

export function useEventsReplay() {

    const { history } = useEventsRecorder()

    function load() {
        selectEvent(0)
    }

    function restart() {
        isPlaying.value = true
    }

    function resume() {
        isPlaying.value = true
    }

    function pause() {
        isPlaying.value = false
    }

    function stop() {
        isPlaying.value = false
    }

    function selectEvent(index: number) {
        const event = history.value[index]
        console.log(`#${index + 1}`, event)

        currentIndex.value = index
        const current = history.value[currentIndex.value]
        pointer.value = {
            x: current.offsetX,
            y: current.offsetY,
        }
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