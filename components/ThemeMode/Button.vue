<template>
  <button
    class="h-7 w-[52px] overflow-hidden rounded-[100px] bg-bg-secondary p-1 transition-all"
    @click="toggleTheme"
  >
    <ThemeModeButtonSpan :dark-mode-active="isDarkMode" />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { ThemeMode } from "~~/Domains/Entities/ThemeMode/ThemeMode";

export default defineComponent({
  setup() {
    const colorMode = ThemeMode.create();
    const isDarkMode = ref(false);

    function setModeValue(colorMode: ThemeMode) {
      return colorMode.isDarkMode;
    }

    const toggleTheme = function () {
      colorMode.toggleMode();
      isDarkMode.value = setModeValue(colorMode);
    };

    onMounted(() => {
      isDarkMode.value = setModeValue(colorMode);
    });

    return {
      isDarkMode,
      toggleTheme,
    };
  },
});
</script>
