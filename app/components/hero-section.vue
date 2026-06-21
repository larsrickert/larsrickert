<template>
  <section class="hero">
    <GlowBackground />
    <GridLinesBackground />

    <div class="hero__content onyx-grid-layout">
      <p class="hero__subtitle">{{ $t("hero.subtitle") }}</p>
      <OnyxHeadline class="hero__title app__h1" is="h1">Lars Rickert</OnyxHeadline>
      <p class="hero__description onyx-text--large">
        {{ $t("hero.description") }}
      </p>

      <div class="hero__buttons onyx-density-cozy">
        <OnyxButton :label="$t('learnMore')" link="#about" />
        <OnyxButton
          :label="$t('projects.view', 2)"
          color="neutral"
          mode="outline"
          link="#projects"
        />
      </div>
    </div>

    <ScrollIndicator />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: calc(100vh - var(--onyx-nav-bar-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &__content {
    position: relative;
    z-index: 10;
    max-width: 56rem;
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity var(--onyx-duration-lg) ease,
      transform var(--onyx-duration-lg) ease;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @starting-style {
      opacity: 0;
      transform: translateY(var(--onyx-density-lg));
    }
  }

  &__subtitle {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin-bottom: var(--onyx-density-lg);
    font-family: var(--onyx-font-family-mono);
    color: var(--onyx-color-text-icons-warning-intense);
  }

  &__title {
    margin-bottom: var(--onyx-density-xl);
  }

  &__description {
    max-width: 40rem;
    margin-bottom: var(--onyx-density-2xl);
    color: var(--onyx-color-text-icons-neutral-soft);
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--onyx-density-sm);
    flex-wrap: wrap;
  }
}
</style>
