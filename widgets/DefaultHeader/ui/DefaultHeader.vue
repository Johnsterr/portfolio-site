<template>
  <header
    :class="
      classNames(cls.header, [], {
        [cls.fixed]: !viewportIsAtTop,
      })
    "
  >
    <div :class="classNames('container', [cls.headerInner])">
      <h2 :class="classNames(cls.logo)">
        <NuxtLink :to="{ name: 'index' }" :class="classNames(cls.logoLink)">
          E<span :class="classNames(cls.logoLinkSpan)">.</span>P<span
            :class="classNames(cls.logoLinkSpan)"
            >.</span
          >
        </NuxtLink>
      </h2>

      <div :class="classNames(cls.navbarActions)">
        <ThemeModeButton />
      </div>

      <Menu />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { classNames } from "~~/shared/lib/classNames/classNames";
import cls from "./DefaultHeader.module.scss";

export default defineComponent({
  setup() {
    const viewportIsAtTop = useViewportIsAtTop();

    return {
      cls,
      classNames,
      viewportIsAtTop,
    };
  },
});
</script>
