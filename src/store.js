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

export const scale = computed(() => (openFloor.value === null ? 1 : 1.5));

export const translateY = computed(() =>
    openFloor.value === null ? 0 : (openFloor.value - 2) * 180
);

function getDelta(index) {
    if (openFloor.value === null || index === openFloor.value) {
        return 0;
    }
    return index < openFloor.value ? 1500 : -1500
}

export const deltas = computed(() => floors.map((f, i) => getDelta(i)));

export function open(floorIndex) {
    openFloor.value = floorIndex;
}

export function close() {
    openFloor.value = null;
}

export function toggle(floorIndex) {
    openFloor.value === floorIndex ? close() : open(floorIndex);
}
