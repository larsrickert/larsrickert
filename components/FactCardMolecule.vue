<script lang="ts" setup>
const props = defineProps<{
  value: number;
  text: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: unknown];
}>();
</script>

<template>
  <div class="card">
    <p class="card__value">{{ props.value }}</p>
    <p class="card__text">{{ props.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/mixins.scss" as *;

.card {
  border: 2px solid var(--lr-color-background-accent);
  border-radius: var(--lr-border-radius);
  padding: 32px;

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
      right: -20px;
      font-weight: 600;
    }
  }

  &__text {
    $before-width: 32px;
    $before-height: 2px;

    margin-top: 4px;
    margin-bottom: 0;
    padding-left: $before-width + 16px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: calc(50% - #{$before-height} / 2);
      width: $before-width;
      height: $before-height;
      background-color: rgba(255, 255, 255, 0.07);
    }
  }
}
</style>
