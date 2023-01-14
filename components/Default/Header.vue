<template>
  <header
    class="fixed top-0 left-0 z-[4] w-full transition-all duration-200"
    :class="classes"
  >
    <div class="container mx-auto flex items-center justify-between gap-3 px-3">
      <h1 class="relative min-w-[80px] text-[2rem] font-normal leading-[1.2]">
        <NuxtLink :to="{ name: 'index' }" class="capitalize text-color-primary">
          Лого<span class="ml-[2px] inline-block text-raw-seinna">.</span>
        </NuxtLink>
      </h1>

      <div class="ml-auto flex items-center gap-4 lg:order-1 lg:ml-0">
        <ThemeModeButton />
      </div>

      <Menu />
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const viewportIsAtTop = useViewportIsAtTop();

    return {
      viewportIsAtTop,
    };
  },
  computed: {
    classes() {
      return !this.viewportIsAtTop ? `py-3 bg-bg-secondary` : `py-4`;
    },
  },
});
</script>
