<template>
  <div class="count">
    {{ storeCounter.count }}
  </div>
</template>

<script lang="ts">
import { useCounterStore } from 'src/stores/example-store';

const storeCounter = useCounterStore();

export default {
  name: 'CounterComponent',
  setup() {
    return {
      storeCounter,
    };
  },
};
</script>
