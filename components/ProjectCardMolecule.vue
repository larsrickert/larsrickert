<script lang="ts" setup>
const props = defineProps<{
  image: string;
  name: string;
  href: string;
  /** Optional image in dark mode */
  darkImage?: string;
  dark?: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: unknown];
}>();
</script>

<template>
  <a class="card" :href="props.href" target="_blank" rel="noreferrer">
    <img
      :tabindex="-1"
      class="card__image"
      :src="props.dark && props.darkImage ? props.darkImage : image"
      :alt="props.name"
    />
    <span class="card__name onyx-text--large">{{ props.name }}</span>
  </a>
</template>

<style lang="scss" scoped>
@mixin transition-hidden {
  opacity: 0;
  visibility: hidden;
  transition: $transition-duration;
}

@mixin transition-visible($opacity: 1) {
  visibility: visible;
  opacity: $opacity;
}

$transition-duration: var(--onyx-duration-sm);

.card {
  cursor: pointer;
  background-color: var(--onyx-color-background-blank);
  position: relative;
  border-radius: var(--onyx-radius-sm);
  box-shadow: var(--onyx-shadow-medium-bottom);
  transition: $transition-duration;

  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: none;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: var(--onyx-radius-sm);
  }

  &::before {
    @include transition-hidden;
    content: "";
    position: absolute;
    background: var(--app-gradient);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    border-radius: var(--onyx-radius-sm);
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
    color: #fff;
  }

  &:hover,
  &:focus-visible {
    &::before {
      @include transition-visible(0.85);
    }

    .card__name {
      @include transition-visible;
    }
  }
}
</style>
