<template>
  <!-- Реализовать active класс и стили для header -->
  <header
    class="fixed top-0 left-0 z-[4] w-full py-4 transition-all duration-200"
    data-header
  >
    <div class="container mx-auto flex items-center justify-between gap-3 px-3">
      <h1
        class="relative z-[2] min-w-[80px] text-[2rem] font-normal leading-[1.2]"
      >
        <NuxtLink :to="{ name: 'index' }" class="capitalize text-color-primary">
          Лого<span class="ml-[2px] inline-block text-raw-seinna">.</span>
        </NuxtLink>
      </h1>

      <div class="ml-auto flex items-center gap-4">
        <UIThemeToggler />
      </div>

      <button
        class="relative z-[2] transition-all"
        :class="{
          '-rotate-[55deg]': !menuButtonIsActive,
          '-rotate-[45deg]': menuButtonIsActive,
        }"
        :active="menuButtonIsActive"
        @click="toggleMenuButtonActive"
      >
        <span
          class="m-[5px] ml-auto block h-[2px] w-[10px] origin-left bg-color-primary transition-all"
          :class="{
            '-rotate-90-transform-3': menuButtonIsActive,
          }"
        ></span>
        <span
          class="m-[5px] block h-[2px] w-[20px] bg-color-primary transition-all"
        ></span>
        <span
          class="m-[5px] block h-[2px] w-[10px] origin-right bg-color-primary transition-all"
          :class="{
            'rotate-90-transform-3': menuButtonIsActive,
          }"
        ></span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const menuButtonIsActive = ref(false);

    const toggleMenuButtonActive = function () {
      menuButtonIsActive.value = !menuButtonIsActive.value;
    };

    return {
      menuButtonIsActive,
      toggleMenuButtonActive,
    };
  },
});
</script>
