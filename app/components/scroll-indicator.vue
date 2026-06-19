<script lang="ts" setup>
import { iconArrowSmallDown } from "@sit-onyx/icons";
</script>

<template>
  <div class="indicator">
    <span class="indicator__text onyx-text--small">{{ $t("scroll") }}</span>
    <OnyxIcon class="indicator__icon" :icon="iconArrowSmallDown" />
  </div>
</template>

<style lang="scss" scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.indicator {
  position: absolute;
  bottom: var(--onyx-density-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--onyx-density-xs);
  color: var(--onyx-color-text-icons-neutral-soft);

  opacity: 0.5;
  transition: opacity var(--onyx-duration-lg) ease var(--onyx-duration-lg);

  @starting-style {
    opacity: 0;
  }

  &__text {
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: var(--onyx-font-family-mono);
  }

  &__icon {
    animation: bounce var(--onyx-duration-lg) infinite;
  }
}
</style>
