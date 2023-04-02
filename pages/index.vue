<template>
  <div class="h-[120vh] bg-bg-primary">
    <div class="hero">Hero Section</div>
    <!-- <p class="mb-20">Index Page</p>
    <div class="h-[300px] w-10 bg-orange-400"></div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.hero {
  padding: 250px 20px;
  height: 150vh;
  background-color: var(--secondary-color);
}
</style>
