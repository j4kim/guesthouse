<script setup>
import { ref, watchEffect } from "vue";
import { openFloor, room } from "./store";

const html = ref("Chargement...");

async function getHtml(floor, room) {
    var resource = "welcome";
    if (floor !== null && room === null) {
        resource = `floors/${floor}`;
    } else if (room !== null) {
        resource = `rooms/${room}`;
    }
    const lang = document.documentElement.lang;
    const response = await fetch(`content/${lang}/${resource}.html`);
    if (!response.ok) {
        return "";
    }
    return await response.text();
}

watchEffect(async () => {
    html.value = await getHtml(openFloor.value, room.value);
});
</script>

<template>
    <div class="content" v-html="html"></div>
</template>
