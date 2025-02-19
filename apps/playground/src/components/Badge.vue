<template>
    <span class="badge">
        <slot></slot>
    </span>
</template>
<style scoped>
.badge {
    background-color: rgb(0, 162, 255);
    padding: 4px 8px;
    border-radius: 8px;
    color: white;
    font-size: .8em;
    line-height: .8em;
    min-width: 22px;
    display: inline-block;
    text-align: center;
}
</style>