<template>
  <button :class="btnClasses" @click="toggleTheme">
    <span :class="spanClasses">
      <IconsMoon v-if="isDarkMode" class="h-5 w-5" />
      <IconsSun v-else class="h-5 w-5" />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { ThemeMode } from "~~/Domains/Entities/ThemeMode/ThemeMode";

export default defineComponent({
  setup() {
    const baseBtnClasses =
      "h-7 w-[52px] overflow-hidden rounded-[100px] p-1 transition-all";
    const baseSpanClasses = "relative top-0 h-5 w-5 transition-all";

    const colorMode = ThemeMode.create();
    const isDarkMode = ref(false);
    const viewportIsAtTop = useState("viewportIsAtTop");

    function setModeValue(colorMode: ThemeMode) {
      return colorMode.isDarkMode;
    }

    const toggleTheme = function () {
      colorMode.toggleMode();
      isDarkMode.value = setModeValue(colorMode);
    };

    const btnClasses = computed(() => {
      let classes = viewportIsAtTop.value ? "bg-bg-secondary" : "bg-bg-primary";
      return `${baseBtnClasses} ${classes}`;
    });

    const spanClasses = computed(() => {
      let classes = isDarkMode.value
        ? "left-[22px] text-white"
        : "left-[2px] text-yellow-500";
      return `${baseSpanClasses} ${classes}`;
    });

    onMounted(() => {
      isDarkMode.value = setModeValue(colorMode);
    });

    return {
      isDarkMode,
      toggleTheme,
      btnClasses,
      spanClasses,
    };
  },
});
</script>
