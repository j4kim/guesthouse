<script setup>
import { openFloor, room } from "./store";
import Building from "./svg/Building.vue";
</script>

<template>
    <main>
        <Building class="building"></Building>
        <aside>
            <h2>Guesthouse</h2>
            <div v-if="room !== null" class="controls">
                <button @click="room = null">⤴️</button>
            </div>
            <div v-else-if="openFloor !== null" class="controls">
                <button @click="openFloor = null">🏠</button>
                <button @click="openFloor--" :disabled="openFloor === 0">
                    ⬇️
                </button>
                <button @click="openFloor++" :disabled="openFloor === 4">
                    ⬆️
                </button>
            </div>
        </aside>
    </main>
</template>

<style scoped>
main {
    display: flex;
}
.building {
    display: block;
    flex: 2;
}
aside {
    flex: 1;
}
@media (max-width: 1000px) {
    main {
        flex-direction: column;
    }
}
.controls {
    text-align: center;
}
.controls button {
    font-size: 1.5rem;
}
</style>
