<script lang="ts" setup>
import type { ProjectsCollectionItem } from "@nuxt/content";
import { iconExpandWindow } from "@sit-onyx/icons";

import iconGitHub from "~/assets/icons/github.svg?raw";

const { project } = defineProps<{
  project: ProjectsCollectionItem;
}>();

const { icon } = useIcon(computed(() => project.icon));
</script>

<template>
  <OnyxCard :class="['project', `project--${project.color}`]">
    <div v-if="project.image" class="project__media">
      <img :src="project.image" :alt="project.title" class="project__image" />
      <div class="project__overlay" />
    </div>

    <div class="project__content">
      <div class="project__header">
        <div class="project__title-container">
          <div class="project__meta">
            <p class="project__subtitle onyx-text--small">{{ project.subtitle }}</p>
            <OnyxTag :label="project.status" :color="project.color" />
          </div>

          <OnyxHeadline is="h3" show-as="h1"> {{ project.title }} </OnyxHeadline>
        </div>

        <div v-if="icon" class="project__icon-container">
          <OnyxIcon :icon :color="project.color" />
        </div>
      </div>

      <p class="project__description">{{ project.description }}</p>

      <div class="project__tags">
        <OnyxTag v-for="tag in project.tags" :key="tag" class="project__tag" :label="tag" />
      </div>

      <OnyxSeparator />

      <div class="project__footer">
        <OnyxLink
          class="project__link"
          :href="project.url"
          target="_blank"
          :with-external-icon="false"
        >
          <OnyxIcon :icon="iconExpandWindow" size="inline" /> View project
        </OnyxLink>

        <OnyxLink
          v-if="project.repository"
          class="project__link project__link--neutral"
          :href="project.repository"
          target="_blank"
          :with-external-icon="false"
        >
          <OnyxIcon :icon="iconGitHub" size="inline" /> GitHub
        </OnyxLink>
      </div>
    </div>
  </OnyxCard>
</template>

<style lang="scss" scoped>
.project {
  --project-border-color: var(--onyx-color-base-primary-300);
  --project-background-icon: var(--onyx-color-base-primary-100);
  --project-button-color: var(--onyx-color-text-icons-primary-intense);
  --project-button-color-hover: var(--onyx-color-text-icons-primary-medium);
  padding: 0;
  transition: border-color var(--onyx-duration-sm) ease;

  $colors: neutral, danger, warning, success, info;
  @each $color in $colors {
    &--#{$color} {
      --project-border-color: var(--onyx-color-base-#{$color}-300);
      --project-background-icon: var(--onyx-color-base-#{$color}-100);
      --project-button-color: var(--onyx-color-text-icons-#{$color}-intense);
      --project-button-color-hover: var(--onyx-color-text-icons-#{$color}-medium);
    }
  }

  &:hover {
    border-color: var(--project-border-color);

    .project__image {
      transform: scale(1.05);
    }
  }

  &__media {
    position: relative;
    overflow: hidden;
    height: 12rem;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    flex-shrink: 0;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        to bottom,
        transparent 40%,
        var(--onyx-color-base-background-blank) 100%
      );
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.75;
    transition: transform var(--onyx-duration-md) ease;
  }

  &__content {
    padding: var(--onyx-card-padding);
    display: flex;
    flex-direction: column;
    gap: var(--onyx-density-md);
    height: 100%;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--onyx-density-md);
  }

  &__title-container {
    display: flex;
    flex-direction: column;
    gap: var(--onyx-density-2xs);
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: var(--onyx-density-md);
    flex-wrap: wrap;
  }

  &__subtitle {
    font-family: var(--onyx-font-family-mono);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--onyx-color-text-icons-neutral-soft);
  }

  &__icon-container {
    flex-shrink: 0;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--onyx-radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--project-background-icon);
    border: var(--onyx-1px-in-rem) solid var(--project-border-color);
  }

  &__description {
    font-weight: 300;
    color: var(--onyx-color-text-icons-neutral-medium);
    flex-grow: 1;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--onyx-density-2xs);
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: var(--onyx-density-md);
    flex-wrap: wrap;
  }

  &__link {
    font-size: var(--onyx-font-size-sm);
    line-height: var(--onyx-line-height-sm);
    text-decoration: none;
    color: var(--project-button-color);

    &:hover {
      color: var(--project-button-color-hover);
    }

    &--neutral {
      --project-button-color: var(--onyx-color-text-icons-neutral-intense);
      --project-button-color-hover: var(--onyx-color-text-icons-neutral-medium);
    }
  }
}
</style>
