import { reactive, watch } from "vue";

const state = reactive({
  floors: [
    {
      style: {},
    },
    {
      style: {},
    },
    {
      style: {},
    },
    {
      style: {},
    },
    {
      style: {},
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
