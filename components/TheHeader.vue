<template>
  <!-- Реализовать active класс и стили для header -->
  <header class="py-4 fixed top-0 left-0 w-full transition-all duration-200 z-[4]" data-header>
    <div class="px-3 container mx-auto flex justify-between items-center gap-3">
      <h1 class="text-[2rem] font-normal leading-[1.2] logo">
        <a href="#" class="text-color-primary">
          Evgeniy<span class="ml-[2px] inline-block text-raw-seinna">.</span>
        </a>
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
