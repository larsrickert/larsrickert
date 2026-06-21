<script lang="ts" setup>
const technologies = [
  "Vue",
  "Nuxt",
  "TypeScript",
  "CSS",
  "HTML",
  "Go",
  "PHP",
  "WordPress",
  "Docker",
  "CI/CD",
];
</script>

<template>
  <SectionContainer id="about" class="about">
    <div class="about__grid">
      <div class="about__image-frame">
        <img
          src="~/assets/images/lars-rickert.webp"
          alt="Lars Rickert, Software Engineer"
          class="about__image"
        />
      </div>

      <div class="about__content">
        <p class="about__subtitle app__subtitle">{{ $t("abount.aboutMe") }}</p>
        <OnyxHeadline is="h2" class="about__title app__h2">
          {{ $t("about.title") }},
          <em class="about__title-emphasis">{{ $t("about.titleEmphasis") }}</em>
        </OnyxHeadline>

        <div class="about__body">
          <p>{{ $t("about.description.1") }}</p>

          <i18n-t keypath="about.description.2" scope="global" tag="p">
            {{ $t("about.description.2") }}

            <template #company>
              <OnyxLink href="https://schwarz-digits.de" target="_blank">Schwarz Digits</OnyxLink>
            </template>
            <template #onyx>
              <OnyxLink href="https://onyx.schwarz" target="_blank">onyx</OnyxLink>
            </template>
          </i18n-t>

          <p>{{ $t("about.description.3") }}</p>
        </div>

        <div class="about__tech">
          <p class="about__tech-title app__subtitle onyx-text--small">{{ $t("about.tools") }}</p>
          <div class="about__tech-list">
            <OnyxBadge v-for="tech in technologies" :key="tech" density="compact">
              {{ tech }}
            </OnyxBadge>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang="scss" scoped>
@use "sit-onyx/breakpoints.scss";

.about {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--onyx-density-3xl);

    @include breakpoints.container(max, sm) {
      grid-template-columns: 1fr;
    }
  }

  &__image-frame {
    position: relative;
    border-radius: var(--onyx-radius-lg);

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: calc(-1 * var(--onyx-radius-lg));
      right: calc(-1 * var(--onyx-radius-lg));
      width: 60%;
      height: 60%;
      border-radius: inherit;
      border: var(--onyx-1px-in-rem) solid var(--onyx-color-component-border-neutral);
      z-index: -1;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__subtitle {
    color: var(--onyx-color-text-icons-warning-intense);
    margin-bottom: var(--onyx-density-md);
  }

  &__title {
    margin-bottom: var(--onyx-density-lg);
  }

  &__title-emphasis {
    font-style: italic;
    color: var(--onyx-color-text-icons-primary-intense);
  }

  &__body {
    color: var(--onyx-color-text-icons-neutral-medium);
    margin-bottom: var(--onyx-density-xl);

    p {
      margin-bottom: var(--onyx-density-md);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__tech-title {
    color: var(--onyx-color-text-icons-neutral-soft);
    margin-bottom: var(--onyx-density-sm);
  }

  &__tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--onyx-density-xs);
  }
}
</style>
