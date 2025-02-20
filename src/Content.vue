<script setup>
import { reactive, ref, watchEffect } from "vue";
import { openFloor, room } from "./store";

const html = ref("Chargement...");

const cache = reactive({});

async function fetchResource(url) {
    const response = await fetch(url);
    if (!response.ok) {
        return "";
    }
    return await response.text();
}

async function getCached(lang, resource) {
    const url = `content/${lang}/${resource}.html`;
    if (!cache[url]) {
        cache[url] = await fetchResource(url);
    }
    return cache[url];
}

async function getHtml(floor, room) {
    var resource = "welcome";
    if (floor !== null && room === null) {
        resource = `floors/${floor}`;
    } else if (room !== null) {
        resource = `rooms/${room}`;
    }
    const lang = document.documentElement.lang;
    return await getCached(lang, resource);
}

watchEffect(async () => {
    html.value = await getHtml(openFloor.value, room.value);
});
</script>

<template>
    <div class="content" v-html="html"></div>
</template>
