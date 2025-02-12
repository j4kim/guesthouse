<script setup>
import { openFloor } from "../../store";
import FirstInside from "./1_FirstInside.vue"
import FirstOutside from "./1_FirstOutside.vue";
</script>

<template>
    <g id="first_floor">
        <FirstInside />
        <FirstOutside :style="{
            transition: 'opacity 1s',
            opacity: openFloor === 1 ? 0 : 1,
        }" />
    </g>
</template>
