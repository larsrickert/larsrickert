<script lang="ts" setup>
const props = defineProps<{
  headline: string;
  backgroundText: string;
}>();
</script>

<template>
  <div class="headline">
    <h2 class="headline__front">{{ props.headline }}</h2>
    <h3 class="headline__back">{{ props.backgroundText }}</h3>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:math";
@use "sit-onyx/breakpoints.scss";

.headline {
  --height: var(--onyx-spacing-4xl);

  text-align: center;
  text-transform: uppercase;
  position: relative;
  height: var(--height);

  display: flex;
  align-items: center;
  justify-content: center;

  @include breakpoints.screen(max, sm) {
    --height: var(--onyx-spacing-2xl);
  }

  &__front {
    font-size: calc(var(--height) / 2);
    line-height: calc(var(--height) / 2);
    margin: 0;
    font-weight: 900;
    z-index: 1;
  }

  &__back {
    font-size: var(--height);
    line-height: var(--height);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    font-weight: 800;
    color: var(--onyx-color-base-neutral-200);
    letter-spacing: var(--onyx-spacing-2xs);
  }
}
</style>
