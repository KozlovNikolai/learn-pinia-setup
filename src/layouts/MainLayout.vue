<template>
  <div class="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {};
  },
});
</script>

<style>
.app {
  text-align: center;
}
</style>
