<template>
  <button
    class="relative z-[2] transition-all lg:hidden"
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
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
