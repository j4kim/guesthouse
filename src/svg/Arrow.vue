<script setup>
import { computed } from "vue";

const props = defineProps({
    x: Number,
    y: Number,
    north: Boolean,
    west: Boolean,
    stand: Boolean,
});

const transform = computed(() => {
    if (props.west) {
        return props.stand
            ? "rotate(-30deg) skewX(-30deg)"
            : "rotate(-30deg) skewX(30deg)";
    }
    if (props.north) {
        return props.stand
            ? "rotate(30deg) skewX(30deg)"
            : "rotate(30deg) skewX(-30deg)";
    }
});
</script>

<template>
    <text
        :x="x"
        :y="y"
        :style="{
            transform,
            transformOrigin: `${x}px ${y}px`,
        }"
        ><slot></slot
    ></text>
</template>

<style scoped>
text {
    font-size: 18px;
    text-anchor: middle;
    font-family: sans-serif;
    cursor: pointer;
}
text:hover {
    opacity: 0.6;
}
</style>
