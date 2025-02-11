<script setup>
import Ground from './floors/0_Ground.vue';
import First from './floors/1_First.vue'
import Second from './floors/2_Second.vue'
import Third from './floors/3_Third.vue'
import Roof from './floors/4_Roof.vue'

import state from '../state';
</script>

<template>
    <svg viewBox="0 0 2000 2000">
        <Ground :style="state.floors[0].style" @click="state.openFloor = 0"/>
        <First :style="state.floors[1].style" @click="state.openFloor = 1"/>
        <Second :style="state.floors[2].style" @click="state.openFloor = 2"/>
        <Third :style="state.floors[3].style" @click="state.openFloor = 3"/>
        <Roof :style="state.floors[4].style" @click="state.openFloor = 4"/>
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