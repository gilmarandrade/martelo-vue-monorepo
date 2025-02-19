<template>
    <div class="capture-area">
        <svg class="capture-layer">
            <circle cx="0" cy="0" r="5" fill="red"/>
        </svg>
    </div>
</template>

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
}
</style>