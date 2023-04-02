<template>
  <header :class="cls.header">
    <div class="container" :class="cls.headerInner">
      <h2 class="relative min-w-[80px] text-[2rem] font-normal leading-[1.2]">
        <NuxtLink :to="{ name: 'index' }" class="capitalize text-color-primary">
          Лого<span class="ml-[2px] inline-block text-raw-seinna">.</span>
        </NuxtLink>
      </h2>

      <div :class="cls.navbarActions">
        <ThemeModeButton />
      </div>

      <Menu />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cls from "./DefaultHeader.module.scss";

export default defineComponent({
  setup() {
    const viewportIsAtTop = useViewportIsAtTop();

    return {
      viewportIsAtTop,
      cls,
    };
  },
});
</script>
