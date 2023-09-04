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
    <div class="hero--limited-width">
      <div>
        <div class="hero__wrapper">
          <h3 class="hero__subtitle">Hello, I'm</h3>
          <h1 class="hero__title">Lars Rickert</h1>
          <h2 class="hero__position">
            <SwappingTextAtom :words="swappingWords" />
          </h2>
        </div>

        <p class="hero__text">
          I've started with web development in 2017 and have quickly found my
          passion for full-stack web development. Especially, I love working on
          cool complete projects that help people get things done faster.
        </p>

        <p class="hero__text">
          My expertise is in Vue.js, TypeScript and CSS/Sass as well as golang,
          PHP and WordPress.
        </p>

        <div class="hero__actions">
          <slot />
        </div>
      </div>

      <img
        class="hero__avatar"
        src="~/assets/images/portrait.webp"
        alt="Portrait"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.hero {
  background-color: var(--lr-color-background-accent);

  &--limited-width {
    max-width: var(--lr-max-page-width);
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 64px 32px;
    // 96px = top bar height
    min-height: calc(100vh - 96px);

    display: flex;
    gap: 32px 128px;
    align-items: center;
    justify-content: space-between;

    @include breakpoint(xl) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }

  &__wrapper {
    width: 100%;
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
    margin-bottom: 32px;
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

  &__text {
    max-width: 600px;
  }

  &__actions {
    margin-top: 32px;

    @include breakpoint(xl) {
      text-align: center;
    }
  }

  &__avatar {
    max-height: 400px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-radius: 50%;

    @include breakpoint(xl) {
      max-height: 300px;
    }

    @include breakpoint(m) {
      max-height: 200px;
    }
  }
}
</style>
