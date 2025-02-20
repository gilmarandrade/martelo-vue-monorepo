import { readonly, ref } from "vue"
import { useRouter } from 'vue-router'

const isRecording = ref(false)

const pointer = ref({
    x: 0,
    y: 0
})

const history = ref<PointerEvent[]>([])

export function useEventsRecorder() {

    const router = useRouter()

    function start() {
        history.value = []
        isRecording.value = true
    }

    function stop() {
        isRecording.value = false
        router.push({ path: '/replay' })
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
        pointer: pointer,
        history: readonly(history),
        handle
    }
}