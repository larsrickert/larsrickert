<template>
  <div class="glow glow--1" />
  <div class="glow glow--2" />
  <div class="glow glow--3" />
</template>

<style lang="scss" scoped>
.glow {
  --glow-color: color-mix(in srgb, var(--onyx-color-base-primary-300), transparent 75%);
  position: absolute;
  pointer-events: none;
  border-radius: var(--onyx-radius-full);
  background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);

  &--1 {
    width: 44rem;
    height: 44rem;
    top: -15%;
    left: -10%;
  }

  &--2 {
    --glow-color: color-mix(in srgb, var(--onyx-color-base-warning-500), transparent 85%);
    width: 32rem;
    height: 32rem;
    bottom: 5%;
    right: -5%;
  }

  &--3 {
    --glow-color: color-mix(in srgb, var(--onyx-color-base-success-300), transparent 85%);
    width: 22rem;
    height: 22rem;
    top: 55%;
    left: 60%;
  }
}
</style>
