<script setup>
import { floors, scale, translateY, openFloor, deltas, translateX } from "../store";
</script>

<template>
    <svg viewBox="0 0 2000 2000">
        <g :style="{
            transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
            transition: 'transform 1s',
            transformOrigin: 'center'
        }">
            <component
                v-for="(floor, index) in floors"
                :is="floor.component"
                :style="{
                    transform: `translateY(${deltas[index]}px)`,
                    transition: 'transform 1s',
                }"
                @click="openFloor = index"
            />
        </g>
    </svg>
</template>

<style>
svg {
    /* background-image: linear-gradient(45deg, #cbd3d6 50%, transparent 50%); */
}

.cls-2 {
    fill: #f3f4ef;
}

.cls-3 {
    fill: #d1cfc5;
}

.cls-4 {
    fill: #ba6243;
}
</style>
