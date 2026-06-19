<script lang="ts" setup>
import { iconArrowSmallDown } from "@sit-onyx/icons";
</script>

<template>
  <section class="hero-section">
    <div class="glow glow-1" />
    <div class="glow glow-2" />
    <div class="glow glow-3" />
    <div class="grid-overlay" />

    <div class="content-wrapper onyx-grid-layout">
      <p class="subtitle">{{ $t("hero.subtitle") }}</p>
      <OnyxHeadline class="title" is="h1">Lars Rickert</OnyxHeadline>
      <p class="description onyx-text--large">
        {{ $t("hero.description") }}
      </p>

      <div class="cta-group onyx-density-cozy">
        <OnyxButton :label="$t('learnMore')" link="#about" />
        <OnyxButton :label="$t('projects.view')" color="neutral" mode="outline" link="#projects" />
      </div>
    </div>

    <div class="scroll-indicator">
      <span class="scroll-text onyx-text--small">{{ $t("scroll") }}</span>
      <OnyxIcon class="scroll-icon" :icon="iconArrowSmallDown" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.hero-section {
  position: relative;
  min-height: calc(100vh - var(--onyx-nav-bar-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .glow {
    --glow-color: color-mix(in srgb, var(--onyx-color-base-primary-300), transparent 75%);
    position: absolute;
    pointer-events: none;
    border-radius: 50%;
    background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);

    &-1 {
      width: 700px;
      height: 700px;
      top: -15%;
      left: -10%;
    }

    &-2 {
      --glow-color: color-mix(in srgb, var(--onyx-color-base-warning-500), transparent 85%);
      width: 500px;
      height: 500px;
      bottom: 5%;
      right: -5%;
    }

    &-3 {
      --glow-color: color-mix(in srgb, var(--onyx-color-base-success-300), transparent 85%);
      width: 350px;
      height: 350px;
      top: 55%;
      left: 60%;
    }
  }

  .grid-overlay {
    --grid-overlay-color: color-mix(in srgb, var(--onyx-color-base-neutral-500), transparent 90%);
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(
        var(--grid-overlay-color) var(--onyx-1px-in-rem),
        transparent var(--onyx-1px-in-rem)
      ),
      linear-gradient(
        90deg,
        var(--grid-overlay-color) var(--onyx-1px-in-rem),
        transparent var(--onyx-1px-in-rem)
      );
    background-size: 4rem 4rem;
  }

  .content-wrapper {
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
      transform: translateY(1.5rem);
    }

    .subtitle {
      text-transform: uppercase;
      letter-spacing: 0.3em;
      margin-bottom: var(--onyx-density-lg);
      font-family: var(--onyx-font-family-mono);
      color: var(--onyx-color-text-icons-warning-intense);
    }

    .title {
      line-height: 1.05;
      margin-bottom: var(--onyx-density-xl);
      font-size: clamp(3.5rem, 9vw, 8rem);
      color: var(--onyx-color-text-icons-neutral-intense);
    }

    .description {
      max-width: 40rem;
      margin-bottom: var(--onyx-density-2xl);
      font-weight: 300;
      color: var(--onyx-color-text-icons-neutral-soft);
    }

    .cta-group {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--onyx-density-sm);
      flex-wrap: wrap;
    }
  }

  .scroll-indicator {
    position: absolute;
    bottom: var(--onyx-density-xl);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--onyx-density-xs);
    color: var(--onyx-color-text-icons-neutral-soft);

    opacity: 0.5;
    transition: opacity var(--onyx-duration-lg) ease var(--onyx-duration-lg);

    @starting-style {
      opacity: 0;
    }

    .scroll-text {
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: var(--onyx-font-family-mono);
    }

    .scroll-icon {
      animation: bounce var(--onyx-duration-lg) infinite;
    }
  }
}
</style>
