<template>
  <DefaultHeader />
  <slot />
  <DefaultFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DefaultHeader } from "~~/widgets/DefaultHeader";
import { DefaultFooter } from "~~/widgets/DefaultFooter";

export default defineComponent({
  components: {
    DefaultHeader,
    DefaultFooter,
  },
  setup() {
    useHead({
      title: "Портфолио",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Сайт портфолио Евгения Пашко",
        },
      ],
    });
  },
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
