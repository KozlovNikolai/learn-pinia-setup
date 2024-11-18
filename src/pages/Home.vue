<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ storeCounter.count }}</div>
    <CounterComponent /> // не понятно зачем
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr />
    <div class="oddEven">The counter is: {{ storeCounter.oddOrEven }}</div>
    <hr />
    <h3>Edit counter:</h3>
    <input v-model="storeCounter.count" type="number" />
  </div>
</template>

<script lang="ts">
// import { ref, computed } from 'vue';
import { useCounterStore } from 'src/stores/example-store';
import CounterComponent from 'src/components/Counter.vue'; // - не понятно зачем

const storeCounter = useCounterStore();
// const count = ref(0);

// const increaseCount = () => {
//   count.value++;
// };
// const decreaseCount = () => {
//   count.value--;
// };
// const oddOrEven = computed(() => {
//   if (count.value % 2 === 0) return 'even';
//   return 'odd';
// });

export default {
  name: 'HomePage',
  setup() {
    return {
      // count,
      // increaseCount,
      // decreaseCount,
      // oddOrEven,
      storeCounter,
      CounterComponent, // не понятно зачем
    };
  },
};
</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
.oddEven {
  font-size: 60px;
  margin: 20px;
}
</style>
