<template>
    <div class="capture-layout">
        <main class="main-panel">
            <CaptureArea class="capture-area"/>
        </main>
        <aside class="status-panel">
            <ButtonIcon>
                <svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                </svg>
            </ButtonIcon>
            <span>
                pointerdown <Badge>pen</Badge>
            </span>
        </aside>
    </div>
</template>

<script setup lang="ts">
import Badge from '../components/Badge.vue';
import ButtonIcon from '../components/ButtonIcon.vue';
import CaptureArea from '../components/CaptureArea.vue';

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

.capture-area {
    margin: auto;
}
</style>