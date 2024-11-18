import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const increaseCount = () => {
    count.value++;
  };
  const decreaseCount = () => {
    count.value--;
  };

  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even';
    return 'odd';
  });

  return {
    count,
    increaseCount,
    decreaseCount,
    oddOrEven,
  };
  // state: () => ({
  //   counter: 0,
  // }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  // actions: {
  //   increment() {
  //     this.counter++;
  //   },
  // },
});
