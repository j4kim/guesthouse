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
        class="btn"
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
    text-anchor: middle;
}
</style>
