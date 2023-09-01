<script lang="ts" setup>
const props = defineProps<{
  image: string;
  /** Optional image in dark mode */
  darkImage?: string;
  dark?: boolean;
  name: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: unknown];
}>();
</script>

<template>
  <div class="card">
    <img
      class="card__image"
      :src="props.dark && props.darkImage ? props.darkImage : image"
      :alt="props.name"
    />
    <span class="card__name">{{ props.name }}</span>
  </div>
</template>

<style lang="scss" scoped>
$transition-duration: 0.5s;

.card {
  cursor: pointer;
  background-color: var(--lr-color-background-accent);
  transition: 0.3s;
  position: relative;
  border-radius: var(--lr-border-radius);
  box-shadow: var(--lr-box-shadow);
  transition: $transition-duration;

  &:hover {
    transform: scale(1.1);
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: var(--lr-border-radius);
  }

  @mixin transition-hidden {
    opacity: 0;
    visibility: hidden;
    transition: $transition-duration;
  }

  @mixin transition-visible($opacity: 1) {
    visibility: visible;
    opacity: $opacity;
  }

  &::before {
    @include transition-hidden;
    content: "";
    position: absolute;
    background: linear-gradient(
      to right,
      var(--lr-color-primary),
      var(--lr-color-secondary)
    );
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    border-radius: var(--lr-border-radius);
    z-index: 1;
  }

  &__name {
    @include transition-hidden;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 2;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: #fff;
  }

  &:hover {
    &::before {
      @include transition-visible(0.85);
    }

    .card__name {
      @include transition-visible;
    }
  }
}
</style>
