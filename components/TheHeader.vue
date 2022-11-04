<template>
  <!-- Реализовать active класс и стили для header -->
  <header
    class="fixed top-0 left-0 z-[4] w-full py-4 transition-all duration-200"
    data-header
  >
    <div class="container mx-auto flex items-center justify-between gap-3 px-3">
      <h1 class="logo text-[2rem] font-normal leading-[1.2]">
        <a href="#" class="capitalize text-color-primary">
          EA<span class="ml-[2px] inline-block text-raw-seinna">.</span>
        </a>
      </h1>

      <div class="ml-auto flex items-center gap-4">
        <select class="w-[45px] text-color-primary" name="language" id="lang">
          <option class="bg-bg-primary text-color-primary" value="en">
            En
          </option>
          <option class="bg-bg-primary text-color-primary" value="ru">
            Ru
          </option>
        </select>

        <button
          class="w-[48px] rounded-[100px] bg-bg-secondary p-1 transition-all"
          aria-label="Change Theme"
          title="Change Theme"
          data-theme-btn
        >
          <span
            class="shadow-inset-shadow/100 relative top-0 h-5 w-5 rounded-[50px] transition-all"
          >
          </span>
        </button>
      </div>

      <button
        class="relative z-[2] -rotate-[55deg] transition-all"
        aria-label="Toggle Menu"
        title="Toggle Menu"
        data-nav-toggle-btn
      >
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
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
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
