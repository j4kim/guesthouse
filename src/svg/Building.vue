<script setup>
import { state, toggle } from "../store";
</script>

<template>
    <svg viewBox="0 0 2000 2000">
        <g :style="{ transform: state.transform, transition: 'transform 1s', transformOrigin: 'center' }">
            <component
                v-for="(floor, index) in state.floors"
                :is="floor.component"
                :style="{
                    transform: floor.transform,
                    transition: 'transform 1s',
                }"
                @click="toggle(index)"
            />
        </g>
    </svg>
</template>

<style>
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
