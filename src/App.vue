<script setup>
import { openFloor, room } from "./store";
import Building from "./svg/Building.vue";
</script>

<template>
    <main>
        <Building class="building"></Building>
        <aside>
            <h2 class="title">Visite interactive</h2>
            <p>
                Commencez votre visite en cliquant sur un étage dans
                l'illustration.
            </p>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}

main {
    display: flex;
    font-family: "Josefin Sans", serif;
    font-size: 1.2em;
    font-weight: 300;
    line-height: 1.5;
    color: #3d4755;
}

.building {
    flex: 2;
    max-height: 80vh;
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

.title {
    font-family: "Alegreya", serif;
    font-weight: 400;
    font-size: 2.5em;
}

p,
.title {
    margin-top: 0;
    margin-bottom: 1rem;
}
</style>
