<script lang="ts" setup>
const swappingWords = [
  "Web Developer @Schwarz IT",
  "Part time freelancer",
  "Technic enthusiast",
  "Dog lover",
  "Based in Bad Friedrichshall, Germany",
];
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__wrapper">
        <h3 class="hero__subtitle">Hello, I'm</h3>
        <h1 class="hero__title">Lars Rickert</h1>
        <h2 class="hero__position">
          <SwappingTextAtom :words="swappingWords" />
        </h2>
      </div>

      <p>
        I've started with web development in 2017 and have quickly found my
        passion for full-stack web development. Especially, I love working on
        cool complete projects that help people get things done faster.
      </p>

      <p>
        My expertise is in Vue.js, TypeScript and CSS/Sass as well as golang,
        PHP and WordPress.
      </p>

      <div class="hero__actions">
        <slot />
      </div>
    </div>

    <img
      class="hero__avatar"
      src="https://avatars.githubusercontent.com/u/67898185?v=4"
      alt="Portrait"
    />
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.hero {
  min-height: 100vh;
  background-color: var(--lr-color-background-accent);
  padding: 32px;
  box-sizing: border-box;

  display: flex;
  gap: 32px 128px;
  align-items: center;
  justify-content: space-around;

  @include breakpoint(l) {
    flex-direction: column-reverse;
  }

  &__wrapper {
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include breakpoint(xl, min) {
      max-width: 512px;
    }

    @include breakpoint(l) {
      max-width: 700px;
      align-items: center;
    }
  }

  &__title {
    @include text-gradient();
    margin: 0;
    -webkit-box-reflect: below -16px linear-gradient(transparent, rgba(0, 0, 0, 0.1));
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 800;

    @include breakpoint(m) {
      font-size: 3rem;
      line-height: 3rem;
    }
  }

  &__subtitle {
    font-size: 1.75rem;
    line-height: 1.75rem;
    color: var(--lr-color-font-accent);
  }

  &__position {
    $height: 1.5rem;

    margin-top: 128px;
    position: relative;
    height: $height;
    font-size: $height;
    line-height: $height;

    &::before {
      @include text-gradient();
      content: " </> ";
      padding-right: 8px;

      @include breakpoint(m) {
        position: absolute;
        top: calc(-100% - 8px);
        left: 0;
      }
    }
  }

  &__avatar {
    max-height: 400px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-radius: 50%;

    @include breakpoint(l) {
      max-height: 300px;
    }

    @include breakpoint(m) {
      max-height: 200px;
    }
  }

  &__actions {
    margin-top: 32px;
  }
}
</style>
