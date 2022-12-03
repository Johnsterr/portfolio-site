import { onMounted, onUnmounted } from "vue";

function useEventListener(event, callback, target = document) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}

export default useEventListener;
