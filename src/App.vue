<script setup>
import { openFloor, room } from "./store";
import Building from "./svg/Building.vue";
</script>

<template>
    <div>
        <Building class="building"></Building>
        <div v-if="room !== null" class="controls">
            <button @click="room = null">⤴️</button>
        </div>
        <div v-else-if="openFloor !== null" class="controls">
            <button @click="openFloor = null">🏠</button>
            <button @click="openFloor--" :disabled="openFloor === 0">⬇️</button>
            <button @click="openFloor++" :disabled="openFloor === 4">⬆️</button>
        </div>
    </div>
</template>

<style scoped>
.building {
    max-width: 800px;
    display: block;
    margin: auto;
}
.controls {
    text-align: center;
}
.controls button {
    font-size: 1.5rem;
}
</style>
