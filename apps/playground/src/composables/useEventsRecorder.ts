import { readonly, ref } from "vue"

const isRecording = ref(false)

const pointer = ref({
    x: 0,
    y: 0
})

export function useEventsRecorder() {

    function start() {
        isRecording.value = true
    }

    function stop() {
        isRecording.value = false
    }

    return {
        start,
        stop,
        isRecording: readonly(isRecording),
        pointer
    }
}