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
    class="lg:unset invisible fixed top-full left-0 z-[1] h-full w-full place-items-center bg-bg-secondary transition-all delay-500 duration-700"
    data-navbar
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const menuButtonIsActive = ref(false);

    const toggleMenuButtonActive = () => {
      menuButtonIsActive.value = !menuButtonIsActive.value;
    };

    return {
      menuButtonIsActive,
      toggleMenuButtonActive,
    };
  },
});
</script>

<style scoped></style>
