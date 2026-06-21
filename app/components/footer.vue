<script lang="ts" setup>
import iconGitHub from "~/assets/icons/github.svg?raw";
import iconLinkedIn from "~/assets/icons/linkedin.svg?raw";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer onyx-text--small">
    <div class="footer__content onyx-grid-layout">
      <p class="app__subtitle">Lars Rickert · {{ currentYear }}</p>

      <div class="footer__links">
        <OnyxLink
          href="https://github.com/larsrickert"
          target="_blank"
          class="footer__link"
          :with-external-icon="false"
        >
          <OnyxIcon :icon="iconGitHub" size="inline" />
          GitHub
        </OnyxLink>

        <OnyxLink
          href="https://www.linkedin.com/in/lars-rickert-392857255"
          target="_blank"
          class="footer__link"
          :with-external-icon="false"
        >
          <OnyxIcon :icon="iconLinkedIn" size="inline" />
          LinkedIn
        </OnyxLink>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: var(--onyx-1px-in-rem) solid var(--onyx-color-component-border-neutral);
  color: var(--onyx-color-text-icons-neutral-soft);
  text-align: center;

  &__content {
    padding-block: var(--onyx-density-xl);
    display: flex;
    flex-direction: column;
    gap: var(--onyx-density-md);
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--onyx-density-lg);
  }

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color var(--onyx-duration-sm) ease-in-out;

    display: flex;
    align-items: center;
    gap: var(--onyx-density-xs);

    &:hover {
      color: var(--onyx-color-text-icons-neutral-medium);
    }
  }
}
</style>
