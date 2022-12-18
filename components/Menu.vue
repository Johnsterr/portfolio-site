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
    class="lg:unset fixed left-0 z-[1] h-full w-full place-items-center bg-red-500 transition-all duration-700"
    :class="navigationClasses"
  >
    <ul class="navbar-list">
      <li>
        <NuxtLink :to="{ name: 'index' }">Home.</NuxtLink>
      </li>

      <li>
        <NuxtLink :to="{ name: 'about' }">About.</NuxtLink>
      </li>

      <li>
        <NuxtLink :to="{ name: 'skills' }">Skills.</NuxtLink>
      </li>

      <li>
        <!-- <NuxtLink :to="{ name: 'portfolio' }">Portfolio.</NuxtLink> -->
      </li>

      <li>
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
        bodyClasses.value = "bg-blue-100";
      } else {
        bodyClasses.value = "bg-green-100";
      }
      return bodyClasses.value;
    });

    useHead({
      bodyAttrs: {
        class: bodyAtr,
      },
    });

    return {
      menuButtonIsActive,
      toggleMenuButtonActive,
    };
  },
  computed: {
    navigationClasses() {
      if (this.menuButtonIsActive) {
        return `top-0 visible delay-[0s]`;
      }

      return `top-full invisible delay-500`;
    },
  },
});
</script>

<style scoped></style>
