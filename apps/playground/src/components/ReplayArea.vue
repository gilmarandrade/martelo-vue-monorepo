<template>
    <div class="capture-area">
        <svg class="capture-layer">
            <circle :cx="pointer.x" :cy="pointer.y" r="5" fill="red"/>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { useEventsReplay } from '../composables/useEventsReplay';

const { pointer } = useEventsReplay()

</script>

<style scoped>
.capture-area {
    border: 1px solid rgb(179, 179, 179);
    box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);
    width: 800px;
    height: 500px;
    background-color: rgb(228, 214, 150);
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