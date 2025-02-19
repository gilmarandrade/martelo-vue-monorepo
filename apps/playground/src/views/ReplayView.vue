<template>
    <div class="replay-layout">
        <aside class="aside">
            aside
        </aside>
        <main class="main">
            main
            replay view
        </main>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.replay-layout {
    background-color: violet;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 300px auto;
}

.replay-layout .aside {
    background-color: yellow;
}

.replay-layout .main {
    background-color: springgreen;
}

</style>