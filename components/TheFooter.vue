<template>
  <footer class="bg-bg-secondary">
    <div class="container mx-auto p-4">
      <div
        class="flex w-full flex-col items-center gap-y-4 border-y border-slate-200 py-4 dark:border-neutral-700 md:flex-row"
      >
        <div class="flex flex-1">
          <a
            href="https://github.com/Johnsterr"
            target="_blank"
            class="mx-2 h-[24px] w-[24px] cursor-pointer hover:text-raw-seinna"
          >
            GH
          </a>
          <a
            href="http://vk.com"
            target="_blank"
            class="mx-2 h-[24px] w-[24px] cursor-pointer hover:text-raw-seinna"
          >
            VK
          </a>
        </div>
        <div class="flex flex-1 items-start md:justify-end">
          <p class="leading-[1.6] text-color-secondary">
            &copy; Е.А. Пашко, 2022
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
