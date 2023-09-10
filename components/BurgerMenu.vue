<script lang="ts" setup>
const props = defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <div class="burger" :class="{ 'burger--open': isOpen }">
    <button class="burger__lines" @click="isOpen = !isOpen">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </button>

    <div class="burger__content">
      <slot />
    </div>

    <div class="burger__backdrop" @click="isOpen = false"></div>
  </div>
</template>

<style lang="scss" scoped>
$transition-duration: 0.4s;

.burger {
  &__lines {
    width: 32px;
    height: 32px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;

    background: none;
    border: none;
    color: currentColor;
    padding: 0;
  }

  &__line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: var(--lr-border-radius);
    background-color: currentColor;
    transition: transform $transition-duration ease-in-out;

    &:nth-child(2) {
      transition-duration: calc(#{$transition-duration} / 2);
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
    width: 400px;
    max-width: 75%;
    transform: translateX(-101%);
    transition: transform $transition-duration ease-in-out;
    z-index: 11;
    background-color: #fff;
    color: var(--lr-color-font-accent);
    position: fixed;
    top: 0;
    left: 0;
    padding: 32px;
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
