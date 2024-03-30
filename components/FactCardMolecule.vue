<script lang="ts" setup>
const props = defineProps<{
  value: number;
  text: string;
}>();
</script>

<template>
  <div class="card">
    <p class="card__value">{{ props.value }}</p>
    <p class="card__text onyx-text--large">{{ props.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/mixins.scss" as *;

.card {
  border: 0.125rem solid var(--onyx-color-base-neutral-200);
  border-radius: var(--onyx-radius-sm);
  padding: var(--onyx-spacing-xl);

  &__value {
    @include text-gradient;
    margin: 0;
    font-size: 3rem;
    line-height: 3rem;
    font-weight: bold;
    position: relative;

    &::after {
      @include text-gradient;
      content: "+";
      font-size: 1.75rem;
      line-height: 1.75rem;
      position: absolute;
      top: 0;
      right: calc(-1 * var(--onyx-spacing-lg));
      font-weight: 600;
    }
  }

  &__text {
    $before-width: var(--onyx-spacing-xl);
    $before-height: 0.125rem;

    margin-top: var(--onyx-spacing-4xs);
    margin-bottom: 0;
    padding-left: calc($before-width + var(--onyx-spacing-md));
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: calc(50% - #{$before-height} / 2);
      width: $before-width;
      height: $before-height;
      background-color: var(--onyx-color-base-neutral-300);
    }
  }
}
</style>
