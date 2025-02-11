<script setup>
import Ground from './floors/0_Ground.vue';
import FirstInside from './floors/1_FirstInside.vue'
import First from './floors/1_First.vue'
import Second from './floors/2_Second.vue'
import Third from './floors/3_Third.vue'
import Roof from './floors/4_Roof.vue'
</script>

<template>
    <svg viewBox="0 0 2000 2000">
        <Ground/>
        <FirstInside />
        <First />
        <Second />
        <Third />
        <Roof />
    </svg>
</template>

<style>
.cls-1, .cls-2, .cls-3, .cls-4 {
    stroke-width: 0px;
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