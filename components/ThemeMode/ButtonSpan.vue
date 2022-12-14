<template>
  <span class="relative top-0 h-5 w-5 transition-all" :class="modeClasses">
    <IconsMoon v-if="darkModeActive" class="h-5 w-5" />
    <IconsSun v-else class="h-5 w-5" />
  </span>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    darkModeActive: {
      type: Boolean,
    },
  },
  computed: {
    modeClasses() {
      return this.darkModeActive
        ? "left-[22px] text-white"
        : "left-[2px] text-yellow-500";
    },
  },
});
</script>
