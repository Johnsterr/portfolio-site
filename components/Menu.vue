<template>
  <button
    class="relative z-[2] transition-all"
    :class="{
      '-rotate-[55deg]': !menuButtonIsActive,
      '-rotate-[45deg]': menuButtonIsActive,
    }"
    :active="menuButtonIsActive"
    @click="toggleMenuButtonActive"
  >
    <span
      class="m-[5px] ml-auto block h-[2px] w-[10px] origin-left bg-color-primary transition-all"
      :class="{
        '-rotate-90-transform-3': menuButtonIsActive,
      }"
    ></span>
    <span
      class="m-[5px] block h-[2px] w-[20px] bg-color-primary transition-all"
    ></span>
    <span
      class="m-[5px] block h-[2px] w-[10px] origin-right bg-color-primary transition-all"
      :class="{
        'rotate-90-transform-3': menuButtonIsActive,
      }"
    ></span>
  </button>

  <nav
    class="lg:unset fixed left-0 z-[1] h-full w-full place-items-center bg-bg-secondary transition-all duration-700"
    :class="navbarClasses"
  >
    <ul class="p-5">
      <li class="my-2 overflow-hidden px-4">
        <NuxtLink
          class="relative mx-auto block max-w-max p-3 text-3xl text-color-primary transition-all duration-700"
          :class="navbarLinkClasses"
          :to="{ name: 'index' }"
          >Home.</NuxtLink
        >
      </li>

      <li class="my-2 overflow-hidden px-4">
        <NuxtLink
          class="relative mx-auto block max-w-max p-3 text-3xl text-color-primary transition-all duration-700"
          :class="navbarLinkClasses"
          :to="{ name: 'about' }"
          >About.</NuxtLink
        >
      </li>

      <li class="my-2 overflow-hidden px-4">
        <NuxtLink
          class="relative mx-auto block max-w-max p-3 text-3xl text-color-primary transition-all duration-700"
          :class="navbarLinkClasses"
          :to="{ name: 'skills' }"
          >Skills.</NuxtLink
        >
      </li>

      <li class="my-2 px-4">
        <!-- <NuxtLink :to="{ name: 'portfolio' }">Portfolio.</NuxtLink> -->
      </li>

      <li class="my-2 px-4">
        <!-- <NuxtLink :to="{ name: 'contact' }">Contact.</NuxtLink> -->
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const menuButtonIsActive = ref(false);
    const bodyClasses = ref("bg-green-100");

    const toggleMenuButtonActive = () => {
      menuButtonIsActive.value = !menuButtonIsActive.value;
    };

    const bodyAtr = computed(() => {
      if (menuButtonIsActive.value) {
        bodyClasses.value = "overflow-hidden";
      } else {
        bodyClasses.value = "";
      }
      return bodyClasses.value;
    });

    const navbarClasses = computed(() => {
      if (menuButtonIsActive.value) {
        return `top-0 visible delay-[0s] overflow-y-auto`;
      } else {
        return `top-full invisible delay-500`;
      }
    });

    const navbarLinkClasses = computed(() => {
      if (menuButtonIsActive.value) {
        return `translate-y-0`;
      } else {
        return `translate-y-12`;
      }
    });

    useHead({
      bodyAttrs: {
        class: bodyAtr,
      },
    });

    return {
      menuButtonIsActive,
      toggleMenuButtonActive,
      navbarClasses,
      navbarLinkClasses,
    };
  },
  // computed: {
  //   navigationClasses() {
  //     if (this.menuButtonIsActive) {
  //       return `top-0 visible delay-[0s]`;
  //     }

  //     return `top-full invisible delay-500`;
  //   },
  // },
});
</script>

<style scoped></style>
