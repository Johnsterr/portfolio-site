<template>
  <BaseHeader>
    <div class="container mx-auto flex items-center justify-between gap-3 px-3">
      <h1 class="relative min-w-[80px] text-[2rem] font-normal leading-[1.2]">
        <NuxtLink :to="{ name: 'index' }" class="capitalize text-color-primary">
          Лого<span class="ml-[2px] inline-block text-raw-seinna">.</span>
        </NuxtLink>
      </h1>

      <div class="ml-auto flex items-center gap-4">
        <ThemeModeButton />
      </div>

      <Menu />
    </div>
  </BaseHeader>
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
});
</script>
