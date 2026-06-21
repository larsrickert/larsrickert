<script lang="ts" setup>
const { id } = defineProps<{
  id: string;
}>();
</script>

<template>
  <section class="section" :id>
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.section {
  padding-block: var(--onyx-grid-margin-vertical);
  scroll-margin-top: var(--onyx-grid-margin-vertical);

  // bind the animation to the viewport tracking timeline
  animation: fadeIn linear both;
  animation-timeline: view();

  // start animating the moment the top of the element enters the bottom of the screen (0%)
  // and finishes when it has fully entered the viewport view (100%).
  animation-range: entry 0% entry 100%;
}
</style>
