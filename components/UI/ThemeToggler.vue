<template>
  <div>
    <button
      class="h-7 w-[52px] overflow-hidden rounded-[100px] bg-bg-primary p-1 transition-all"
      @click="toggleTheme"
    >
      <span
        class="relative top-0 h-5 w-5 transition-all"
        :class="{
          'left-[2px]': !active,
          'text-yellow-500': !active,
          'left-[22px]': active,
          'text-white': active,
        }"
      >
        <IconsSun v-if="!active" class="h-5 w-5" />
        <IconsMoon v-else class="h-5 w-5" />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ThemeMode } from "~~/Domains/Entities/ThemeMode/ThemeMode";

export default defineComponent({
  setup() {
    const colorMode = ThemeMode.create();
    const active = ref(false);

    const toggleTheme = function () {
      active.value = !active.value;
      colorMode.toggleMode();
    };
    return {
      active,
      toggleTheme,
    };
  },
});
</script>
