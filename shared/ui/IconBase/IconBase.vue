<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="name"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script setup lang="ts">
<<<<<<< HEAD:shared/ui/BaseIcon/BaseIcon.vue
import { computed } from "vue";

=======
>>>>>>> d24b9c55c5d670b85ea71d861e5851b3cb5f8ab1:shared/ui/IconBase/IconBase.vue
interface IconBaseProps {
  name?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}

const props = withDefaults(defineProps<IconBaseProps>(), {
<<<<<<< HEAD:shared/ui/BaseIcon/BaseIcon.vue
  name: () => "Base",
=======
  name: () => "Box",
>>>>>>> d24b9c55c5d670b85ea71d861e5851b3cb5f8ab1:shared/ui/IconBase/IconBase.vue
  width: () => 18,
  height: () => 18,
  color: () => "currentColor",
});

const viewBox = computed(() => `0 0 ${props.width} ${props.height}`);
</script>
