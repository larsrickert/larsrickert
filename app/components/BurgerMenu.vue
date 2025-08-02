<script lang="ts" setup>
const isOpen = defineModel<boolean>();
</script>

<template>
  <div class="burger" :class="{ 'burger--open': isOpen }">
    <button class="burger__lines" @click="isOpen = !isOpen">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </button>

    <div class="burger__content">
      <slot></slot>
    </div>

    <div class="burger__backdrop" @click="isOpen = false"></div>
  </div>
</template>

<style lang="scss" scoped>
$transition-duration: var(--onyx-duration-sm);

.burger {
  &__lines {
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--onyx-spacing-3xs);

    background: none;
    border: none;
    color: currentColor;
    padding: 0;

    &:focus-visible {
      outline: var(--app-outline);
      border-radius: var(--onyx-radius-sm);
    }
  }

  &__line {
    display: block;
    height: var(--onyx-spacing-4xs);
    width: 100%;
    border-radius: var(--onyx-radius-sm);
    background-color: currentColor;
    transition: transform $transition-duration ease-in-out;

    &:nth-child(2) {
      transition-duration: calc($transition-duration / 2);
    }
  }

  &--open {
    .burger__line {
      $translate-base: 7px;

      &:first-child {
        transform: rotate(45deg) translate($translate-base, $translate-base);
      }

      &:nth-child(2) {
        transform: scaleY(0);
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate($translate-base, -$translate-base);
      }
    }

    .burger__content {
      transform: translateX(0);
    }

    .burger__backdrop {
      display: block;
    }
  }

  &__content {
    height: 100vh;
    width: 24rem;
    max-width: 70%;
    transform: translateX(-101%);
    transition: transform $transition-duration ease-in-out;
    z-index: 11;
    background-color: var(--onyx-color-base-background-blank);
    color: var(--lr-color-font-accent);
    position: fixed;
    top: 0;
    left: 0;
    padding: var(--onyx-spacing-xl);
    box-sizing: border-box;
  }

  &__backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
}
</style>
