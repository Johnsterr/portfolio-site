<template>
  <header
    class="fixed top-0 left-0 z-[4] w-full transition-all duration-200"
    :class="classes"
  >
    <slot />
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const isScrollToTop = useIsScrollToTop();

    return {
      isScrollToTop,
    };
  },
  computed: {
    classes() {
      return !this.isScrollToTop ? `py-3 bg-bg-secondary` : `py-4`;
    },
  },
});
</script>
