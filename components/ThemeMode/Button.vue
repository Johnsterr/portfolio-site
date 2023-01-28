<template>
  <button :class="btnClasses" @click="toggleTheme">
    <span :class="spanClasses">
      <IconBase name="Theme" width="20" height="20" class="h-5 w-5">
        <IconsMoon v-if="isDarkMode" />
        <IconsSun v-else />
      </IconBase>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, Ref } from "vue";
import { ThemeMode } from "~~/fsd/entities/ThemeMode/ThemeMode";

export default defineComponent({
  setup() {
    const baseBtnClasses =
      "h-7 w-[52px] overflow-hidden rounded-[100px] p-1 transition-all";
    const baseSpanClasses = "relative top-0 h-5 w-5 transition-all";

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

    const spanClasses = computed(() => {
      let classes = isDarkMode.value
        ? "left-[22px] text-white"
        : "left-[2px] text-yellow-500";
      return `${baseSpanClasses} ${classes}`;
    });

    onMounted(() => {
      isDarkMode.value = colorMode.isDarkMode();
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
