<script lang="ts" setup>
const swappingWords = [
  "Web Developer",
  "Technic enthusiast",
  "Dog lover",
  "Word 4",
  "Word 5",
];
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <h2 class="hero__subtitle">Hello, I'm</h2>
      <h1 class="hero__title">Lars Rickert</h1>
      <h2 class="hero__position">
        <SwappingTextAtom :words="swappingWords" />
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.hero {
  height: 100vh;
  background-color: var(--lr-color-background-accent);
  padding: 128px;
  box-sizing: border-box;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 512px;
  }

  &__title {
    @include text-gradient();
    margin: 0;
    -webkit-box-reflect: below -10px linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  }

  &__subtitle {
    margin-bottom: 8px;
    color: var(--lr-color-font-accent);
  }

  &__position {
    margin-top: 128px;

    &::before {
      @include text-gradient();
      content: " </> ";
      padding-right: 8px;
    }
  }
}
</style>
