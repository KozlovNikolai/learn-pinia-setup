<template>
  <div class="about">
    <h1>About</h1>
    <button @click="storeCounter.increaseCount">
      {{ storeCounter.count }}
    </button>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from 'src/stores/example-store';

const storeCounter = useCounterStore();

export default {
  name: 'AboutPage',
  setup() {
    return {
      storeCounter,
    };
  },
};
</script>
