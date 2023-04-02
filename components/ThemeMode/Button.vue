<template>
  <button
    class="themeBtn"
    :class="{
      'themeBtn--primary': !viewportIsAtTop,
    }"
    @click="toggleTheme"
  >
    <span
      class="themeSpan"
      :class="{
        'themeSpan--dark': isDarkMode,
      }"
    >
      <KitBaseIcon name="Theme" width="20" height="20" class="h-5 w-5">
        <MoonIcon v-if="isDarkMode" />
        <SunIcon v-else />
      </KitBaseIcon>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, Ref } from "vue";
import { ThemeMode } from "~~/entities/ThemeMode/ThemeMode";
import { KitBaseIcon } from "~~/shared/ui/BaseIcon";
import MoonIcon from "~~/shared/ui/Icons/Moon.vue";
import SunIcon from "~~/shared/ui/Icons/Sun.vue";

export default defineComponent({
  components: {
    KitBaseIcon,
    MoonIcon,
    SunIcon,
  },
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
      viewportIsAtTop,
    };
  },
});
</script>

<style lang="scss">
.themeBtn {
  padding: 0.25rem;
  height: 1.75rem;
  width: 52px;
  background-color: rgb(255 255 255 / 1);
  border-radius: 100px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  overflow: hidden;
}
.themeBtn--primary {
  background-color: rgb(230 230 230 / 1);
}
.themeSpan {
  position: relative;
  top: 0;
  left: 2px;
  color: #f59e0b;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.themeSpan--dark {
  left: 22px;
  color: #fff;
}
</style>
