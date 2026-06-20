<template>
  <div class="grid-lines"></div>
</template>

<style lang="scss" scoped>
.grid-lines {
  --grid-color: color-mix(in srgb, var(--onyx-color-base-neutral-500), transparent 90%);
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--grid-color) var(--onyx-1px-in-rem), transparent var(--onyx-1px-in-rem)),
    linear-gradient(
      90deg,
      var(--grid-color) var(--onyx-1px-in-rem),
      transparent var(--onyx-1px-in-rem)
    );
  background-size: 4rem 4rem;
}
</style>
