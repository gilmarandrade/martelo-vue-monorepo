<script setup lang="ts">
import { ref } from 'vue';
import { decrement } from '..';

const count = ref(0)

function handleClick() {
    count.value = decrement(count.value)
    console.log('MyBrandButton click', count.value)
}
</script>
<template>
    <button class="my-brand-button" @click="handleClick">
        <slot></slot>
        <span>: {{ count }} clicks</span>
    </button>
</template>

<style scoped>
.my-brand-button {
    padding: 20px;
    border-radius: 8px;
    background-color: purple;
    color: white;
    border: none;
}

.my-brand-button:hover {
    background-color: rgb(255, 0, 255);
}
</style>