<script setup>
const props = defineProps({
    x: Number,
    y: Number,
    north: Boolean,
    west: Boolean,
});
</script>

<template>
    <text :x="x" :y="y"><slot></slot></text>
</template>

<style scoped>
text {
    font-size: 18px;
    transform-origin: center;
    transform: rotate(60deg) skew(0deg, -30deg);
    font-family: sans-serif;
    cursor: pointer;
}
</style>
