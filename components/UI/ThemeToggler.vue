<template>
  <div>
    <button
      class="h-6 w-[48px] rounded-[100px] bg-bg-primary p-1 transition-all"
      @click="toggleTheme"
    >
      <span
        class="shadow-inset-shadow/100 relative top-0 h-5 w-5 rounded-[50px] transition-all"
      >
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ThemeMode } from "~~/Domains/Entities/ThemeMode/ThemeMode";

export default defineComponent({
  setup() {
    const colorMode = ThemeMode.create();

    const toggleTheme = () => colorMode.toggleMode();

    return {
      toggleTheme,
    };
  },
});
</script>
