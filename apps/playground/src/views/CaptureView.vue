<template>
    <div class="capture-layout">
        <main class="main-panel">
            <CaptureArea class="capture-area"/>
        </main>
        <aside class="status-panel" :class="{ 'is-recording': isRecording }">
            <ButtonIcon title="Stop capture" v-if="isRecording" @click="stop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                </svg>
            </ButtonIcon>
            <ButtonIcon title="Start capture" v-else @click="start">
                <svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                </svg>
            </ButtonIcon>
            <!-- <ButtonIcon title="Pause capture">
                <svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
                </svg>
            </ButtonIcon> -->
            <span v-if="lastEvent">
                {{ lastEvent.type }} <Badge>{{ lastEvent.pointerType }}</Badge>
            </span>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Badge from '../components/Badge.vue';
import ButtonIcon from '../components/ButtonIcon.vue';
import CaptureArea from '../components/CaptureArea.vue';
import { useEventsRecorder } from '../composables/useEventsRecorder';

const { start, stop, isRecording, history } = useEventsRecorder()

const lastEvent = computed(()=> {
    if(!history.value.length) {
        return null
    }
    return history.value[history.value.length - 1]
})

</script>

<style scoped>
.capture-layout {
    /* background-color: violet; */
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 30px;
    grid-template-areas: 
        "main"
        "status";
}

.main-panel {
    background-color: rgb(0 0 0 / 9%);
    grid-area: main;
    display: flex;

}

.status-panel {
    background-color: rgba(0, 0, 0, 0.247);
    grid-area: status;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0 4px;
}

.status-panel.is-recording {
    background-color: rgba(255, 0, 0, 0.5);
}

.capture-area {
    margin: auto;
}
</style>