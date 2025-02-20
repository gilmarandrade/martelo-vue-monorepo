<template>
    <button class="button button--icon">
        <slot></slot>
    </button>
</template>
<style scoped>
.button {
    border: none;
    background: none;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
}

.button:not(:disabled):hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.button--icon {
    width: 24px;
    height: 24px;
}

.button:disabled {
    opacity: .2;
    cursor: not-allowed;
}
</style>