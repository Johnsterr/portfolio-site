<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: () => "Box",
  width: () => 18,
  height: () => 18,
  color: () => "currentColor",
});

const viewBox = computed(() => `0 0 ${props.width} ${props.height}`);
</script>
