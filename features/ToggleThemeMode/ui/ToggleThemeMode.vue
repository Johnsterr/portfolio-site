<template>
  <button :class="classNames(cls.btn)" @click="toggleTheme">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, Ref } from "vue";
import { ThemeMode } from "~~/entities/ThemeMode";
import { classNames } from "~~/shared/lib/classNames/classNames";
import cls from "./ToggleThemeMode.module.scss";

export default defineComponent({
  setup() {
    const baseBtnClasses =
      "h-7 w-[52px] overflow-hidden rounded-[100px] p-1 transition-all";

    const colorMode: ThemeMode = ThemeMode.create();
    const isDarkMode: Ref<null | boolean> = ref(null);
    const viewportIsAtTop: Ref<boolean> = useState("viewportIsAtTop");

    const toggleTheme = () => {
      colorMode.toggleMode();
      isDarkMode.value = colorMode.isDarkMode();
    };

    const btnClasses = computed(() => {
      let classes = viewportIsAtTop.value ? "bg-bg-secondary" : "bg-bg-primary";
      return `${baseBtnClasses} ${classes}`;
    });

    onMounted(() => {
      isDarkMode.value = colorMode.isDarkMode();
    });

    return {
      cls,
      classNames,
      isDarkMode,
      toggleTheme,
      btnClasses,
    };
  },
});
</script>

<style module lang="scss">
@import "./ToggleThemeMode.module.scss";
</style>
