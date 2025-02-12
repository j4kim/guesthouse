import { markRaw, reactive, watch } from "vue";
import Ground from "./svg/floors/0_Ground.vue";
import First from "./svg/floors/1_First.vue";
import Second from "./svg/floors/2_Second.vue";
import Third from "./svg/floors/3_Third.vue";
import Roof from "./svg/floors/4_Roof.vue";

export const state = reactive({
    transform: "",

    floors: [
        {
            transform: "",
            component: markRaw(Ground),
        },
        {
            transform: "",
            component: markRaw(First),
        },
        {
            transform: "",
            component: markRaw(Second),
        },
        {
            transform: "",
            component: markRaw(Third),
        },
        {
            transform: "",
            component: markRaw(Roof),
        },
    ],
    openFloor: null,
});

export function open(floorIndex) {
    state.openFloor = floorIndex;
    state.transform = "scale(1.5)"
    state.floors.forEach((floor, index) => {
        if (index < floorIndex) {
            floor.transform = "translateY(1500px)";
        } else if (index === floorIndex) {
            floor.transform = "";
        } else {
            floor.transform = "translateY(-1500px)";
        }
    });
}

export function close() {
    state.openFloor = null;
    state.transform = ""
    state.floors.forEach((f) => (f.transform = ""));
}

export function toggle(floorIndex) {
    state.openFloor === floorIndex ? close() : open(floorIndex);
}
