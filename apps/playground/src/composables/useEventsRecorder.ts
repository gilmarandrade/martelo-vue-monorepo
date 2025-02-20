import { readonly, ref } from "vue"

export function useEventsRecorder() {
    const isRecording = ref(false)

    function start() {
        isRecording.value = true
    }

    function stop() {
        isRecording.value = false
    }

    return {
        start,
        stop,
        isRecording: readonly(isRecording)
    }
}