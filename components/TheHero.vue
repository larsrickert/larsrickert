<script lang="ts" setup>
const { t } = useI18n();

const swappingWords = [
  t("home.hero.words.position"),
  t("home.hero.words.freelancer"),
  t("home.hero.words.technicEnthusiast"),
  t("home.hero.words.location"),
  t("home.hero.words.dogLover"),
];
</script>

<template>
  <section class="page-content hero">
    <div>
      <div class="hero__wrapper">
        <h3 class="hero__subtitle">
          {{ t("home.hero.subtitle") }}
        </h3>
        <h1 class="hero__title">Lars Rickert</h1>
        <h2 class="hero__position">
          <SwappingTextAtom :words="swappingWords" />
        </h2>
      </div>

      <p class="hero__text">
        {{ t("home.hero.description") }}
      </p>

      <div class="hero__actions">
        <slot />
      </div>
    </div>

    <img
      class="hero__avatar"
      src="~/assets/images/portrait.webp"
      alt="Portrait"
      width="300"
      height="300"
    />
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.hero {
  // 5.5rem = header height
  min-height: calc(100vh - 5.5rem);
  display: flex;
  gap: var(--onyx-spacing-xl) var(--onyx-spacing-4xl);
  align-items: center;
  justify-content: space-between;

  @include breakpoint(xl) {
    flex-direction: column-reverse;
    justify-content: center;
  }

  &__wrapper {
    width: 100%;
  }

  &__title {
    @include text-gradient();
    margin: 0;
    -webkit-box-reflect: below calc(-1 * var(--onyx-spacing-md))
      linear-gradient(transparent, rgba(0, 0, 0, 0.1));
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
    color: var(--onyx-color-text-icons-neutral-soft);
  }

  &__position {
    $height: 1.5rem;

    margin-top: var(--onyx-spacing-4xl);
    margin-bottom: var(--onyx-spacing-xl);
    position: relative;
    height: $height;
    font-size: $height;
    line-height: $height;

    &::before {
      @include text-gradient();
      content: " </> ";
      padding-right: var(--onyx-spacing-2xs);

      @include breakpoint(m) {
        position: absolute;
        top: calc(-100% - var(--onyx-spacing-2xs));
        left: 0;
      }
    }
  }

  &__text {
    max-width: 37rem;
    white-space: pre-wrap;
  }

  &__actions {
    margin-top: var(--onyx-spacing-xl);

    @include breakpoint(xl) {
      text-align: center;
    }
  }

  &__avatar {
    max-height: 24rem;
    width: auto;
    box-shadow: var(--onyx-shadow-soft-right);
    border-radius: var(--onyx-radius-full);

    @include breakpoint(xl) {
      max-height: 18rem;
    }

    @include breakpoint(m) {
      max-height: 12rem;
    }
  }
}
</style>
