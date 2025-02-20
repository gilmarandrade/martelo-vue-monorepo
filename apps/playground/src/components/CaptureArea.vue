<template>
    <div ref="captureAreaRef" class="capture-area">
        <svg class="capture-layer">
            <circle :cx="pointer.x" :cy="pointer.y" r="5" fill="red"/>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useEventsRecorder } from '../composables/useEventsRecorder';

const { pointer, handle } = useEventsRecorder()

const captureAreaRef = ref<Element>()

// TODO REMOVE EVENT LISTENER

function addEventListeners(element: Element, eventTypes:string[]) {
    eventTypes.forEach((type) => {
        element.addEventListener(type, (e: Event) => {
            pointer.value = {
                x: (e as PointerEvent).offsetX,
                y: (e as PointerEvent).offsetY
            }
            handle(e)
        })
    })
}

const supportedEvents = ref([
    "pointerover",
    "pointerenter",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointercancel",
    "pointerout",
    "pointerleave",
    "gotpointercapture",
    "lostpointercapture"
])

onMounted(() => {
    console.log('capture area mounted', captureAreaRef.value)
    if(captureAreaRef.value) {
        addEventListeners(captureAreaRef.value, supportedEvents.value)
    }

})

onUnmounted(() => {
    console.log('capture area unmounted')
})
</script>

<style scoped>
.capture-area {
    border: 1px solid rgb(179, 179, 179);
    box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);
    width: 800px;
    height: 500px;
    background-color: white;
    position: relative;
}

.capture-layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>