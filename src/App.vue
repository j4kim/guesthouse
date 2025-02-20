<script setup>
import Content from "./Content.vue";
import { openFloor, room } from "./store";
import Building from "./svg/Building.vue";
</script>

<template>
    <main>
        <Building class="building"></Building>
        <aside>
            <div class="controls">
                <template v-if="room !== null">
                    <div class="btn" @click="room = null">back</div>
                </template>
                <template v-else-if="openFloor !== null">
                    <div
                        class="btn"
                        :class="{ disabled: openFloor === 0 }"
                        @click="openFloor--"
                    >
                        ↓ down
                    </div>
                    <div class="btn" @click="openFloor = null">back</div>
                    <div
                        class="btn"
                        :class="{ disabled: openFloor === 4 }"
                        @click="openFloor++"
                    >
                        ↑ up
                    </div>
                </template>
            </div>
            <Content></Content>
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
}

aside {
    flex: 1;
}

@media (max-width: 1000px) {
    main {
        flex-direction: column;
    }
    .building {
        max-height: 75vh;
    }
}

.controls {
    text-align: center;
    min-height: 30px;
    margin-bottom: 1em;
}

.controls button {
    font-size: 1.5rem;
}

h1,
h2 {
    font-family: "Alegreya", serif;
    font-weight: 400;
    font-size: 2em;
}

p,
h1,
h2 {
    margin-top: 0;
    margin-bottom: 1rem;
}

.btn {
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    transition: opacity 0.2s;
    cursor: pointer;
    display: inline-block;
}
div.btn {
    border-bottom: 1px solid #3d4755;
    padding-bottom: 4px;
    margin: 0 8px;
}
.btn:hover {
    opacity: 0.7;
}
.btn.disabled {
    opacity: 0.4;
    pointer-events: none;
}
</style>
