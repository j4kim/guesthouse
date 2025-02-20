<script setup>
import { ref, watchEffect } from "vue";
import { openFloor, room } from "./store";

const html = ref("Chargement...");

async function getHtml(floor, room) {
    var url = "content/fr/welcome.html";
    if (floor !== null && room === null) {
        url = `content/fr/floor_${floor}.html`;
    } else if (room !== null) {
        url = `content/fr/room_${room}.html`;
    }
    const response = await fetch(url);
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
