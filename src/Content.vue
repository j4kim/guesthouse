<script setup>
import { ref, watchEffect } from "vue";
import { openFloor, room } from "./store";

const html = ref("Chargement...");

watchEffect(async () => {
    var url = "content/fr/welcome.html";
    if (openFloor.value !== null && room.value === null) {
        url = `content/fr/floor_${openFloor.value}.html`;
    } else if (room.value !== null) {
        url = `content/fr/room_${room.value}.html`;
    }
    const response = await fetch(url);
    if (!response.ok) {
        html.value = "";
        return;
    }
    const body = await response.text();
    html.value = body;
});
</script>

<template>
    <div class="content" v-html="html"></div>
</template>
