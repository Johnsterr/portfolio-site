<template>
  <button
    class="h-7 w-[52px] overflow-hidden rounded-[100px] bg-bg-primary p-1 transition-all"
    @click="toggleTheme"
  >
    <ThemeTogglerSpan :dark-mode-active="isDarkMode" />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { ThemeMode } from "~~/Domains/Entities/ThemeMode/ThemeMode";
import ThemeTogglerSpan from "./ThemeTogglerSpan";

export default defineComponent({
  components: { ThemeTogglerSpan },
  setup() {
    const colorMode = ThemeMode.create();
    const isDarkMode = ref(false);

    const toggleTheme = function () {
      isDarkMode.value = !isDarkMode.value;
      colorMode.toggleMode();
    };

    onMounted(() => {
      isDarkMode.value = colorMode.isDarkMode;
      console.log("colorMode.isDarkMode", colorMode.isDarkMode);
    });
    return {
      isDarkMode,
      toggleTheme,
    };
  },
});
</script>
