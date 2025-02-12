import { computed, ref } from "vue";
import Ground from "./svg/floors/0_Ground.vue";
import First from "./svg/floors/1_First.vue";
import Second from "./svg/floors/2_Second.vue";
import Third from "./svg/floors/3_Third.vue";
import Roof from "./svg/floors/4_Roof.vue";

export const floors = [
    { component: Ground },
    { component: First },
    { component: Second },
    { component: Third },
    { component: Roof },
];

export const openFloor = ref(null);

const roomTransform = {
    101: { s: 3.5, dx: 0, dy: -400 },
};

export const room = ref(null);

export const scale = computed(() => {
    if (room.value) {
        return roomTransform[room.value].s;
    }
    if (openFloor.value !== null) {
        return 1.5;
    }
    return 1;
});

export const translateY = computed(() => {
    if (room.value) {
        return roomTransform[room.value].dy;
    }
    if (openFloor.value !== null) {
        return (openFloor.value - 2) * 180;
    }
    return 0;
});

export const translateX = computed(() => {
    if (room.value) {
        return roomTransform[room.value].dx;
    }
    return 0;
});

function getDelta(index) {
    if (openFloor.value === null || index === openFloor.value) {
        return 0;
    }
    return index < openFloor.value ? 1500 : -1500;
}

export const deltas = computed(() => floors.map((f, i) => getDelta(i)));
