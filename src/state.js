import { markRaw, reactive, watch } from "vue";
import Ground from "./svg/floors/0_Ground.vue";
import First from "./svg/floors/1_First.vue";
import Second from "./svg/floors/2_Second.vue";
import Third from "./svg/floors/3_Third.vue";
import Roof from "./svg/floors/4_Roof.vue";

const state = reactive({
    floors: [
        {
            style: {},
            component: markRaw(Ground),
        },
        {
            style: {},
            component: markRaw(First),
        },
        {
            style: {},
            component: markRaw(Second),
        },
        {
            style: {},
            component: markRaw(Third),
        },
        {
            style: {},
            component: markRaw(Roof),
        },
    ],
    openFloor: null,
});

watch(
    () => state.openFloor,
    (value) => {
        console.log("open floor", value);
    }
);

export default state;
