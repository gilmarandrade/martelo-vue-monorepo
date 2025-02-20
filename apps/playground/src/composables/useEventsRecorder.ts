import { readonly, ref } from "vue"

const isRecording = ref(false)

const pointer = ref({
    x: 0,
    y: 0
})

const history = ref<PointerEvent[]>([])

export function useEventsRecorder() {

    function start() {
        history.value = []
        isRecording.value = true
    }

    function stop() {
        isRecording.value = false
    }

    function handle(event: Event) {
        if(isRecording.value) {
            history.value.push(event as PointerEvent)
            console.log(event.type, event)
        }
    }

    return {
        start,
        stop,
        isRecording: readonly(isRecording),
        pointer,
        history: readonly(history),
        handle
    }
}