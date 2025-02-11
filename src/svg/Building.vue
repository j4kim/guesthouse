<script setup>
import state from "../state";
</script>

<template>
    <svg viewBox="0 0 2000 2000">
        <component
            v-for="(floor, index) in state.floors"
            :is="floor.component"
            :style="floor.style"
            @click="state.openFloor = index"
        />
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
