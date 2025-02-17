<script setup>
import {
    floors,
    scale,
    translateY,
    openFloor,
    deltas,
    translateX,
} from "../store";
</script>

<template>
    <svg viewBox="0 0 2000 1750">
        <g
            :style="{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transformOrigin: 'center',
            }"
        >
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
    background-color: #faf7f2;
}

svg g {
    transition: all 1s;
}
</style>
