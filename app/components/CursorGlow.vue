<script lang="ts" setup>
import type { CSSProperties } from "vue";

const style = ref<CSSProperties>({});

const mouseMoveListener = (event: MouseEvent) => {
  style.value = {
    left: `${event.clientX}px`,
    top: `${event.clientY}px`,
    opacity: 1,
  };
};

const mouseLeaveListener = () => {
  style.value.opacity = "0";
};

onMounted(() => {
  document.addEventListener("mousemove", mouseMoveListener);
  document.addEventListener("mouseleave", mouseLeaveListener);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", mouseMoveListener);
  document.removeEventListener("mouseleave", mouseLeaveListener);
});
</script>

<template>
  <div class="cursor-glow" :style></div>
</template>

<style lang="scss" scoped>
.cursor-glow {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.1), rgba(56, 189, 248, 0) 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}
</style>
