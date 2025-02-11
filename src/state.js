import { markRaw, reactive, watch } from "vue";
import Ground from "./svg/floors/0_Ground.vue";
import First from "./svg/floors/1_First.vue";
import Second from "./svg/floors/2_Second.vue";
import Third from "./svg/floors/3_Third.vue";
import Roof from "./svg/floors/4_Roof.vue";

const state = reactive({
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

watch(
    () => state.openFloor,
    (value) => {
        state.floors.forEach((floor, index) => {
            console.log("open floor", value)
            if (index < value) {
                floor.transform = "translateY(1000px)";
            } else if (index === value) {
                floor.transform = "";
            } else {
                floor.transform = "translateY(-1000px)";
            }
        });
    }
);

export default state;
