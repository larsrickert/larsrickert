<script lang="ts" setup>
import type { OnyxNavItemProps } from "sit-onyx";

const { t } = useI18n();
const localePath = useLocalePath();

const navItems = computed(() => {
  return [
    { label: t("imprint.pageName"), href: localePath({ name: "imprint" }) },
    {
      label: t("privacyPolicy.pageName"),
      href: localePath({ name: "privacy-policy" }),
    },
  ] satisfies OnyxNavItemProps[];
});
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <span class="footer__copyright">
        Lars Rickert © 2023 - {{ t("global.allRightsReserved") }}</span
      >
      <NavigationOrganism :nav-items="navItems" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "sit-onyx/breakpoints.scss";

.footer {
  background-color: var(--onyx-color-base-background-blank);

  &__content {
    max-width: var(--onyx-grid-max-width);
    margin-inline: var(--onyx-grid-margin-inline);
    padding: var(--onyx-spacing-3xs) var(--onyx-grid-margin);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--onyx-spacing-xs) var(--onyx-spacing-xl);

    @include breakpoints.screen(max, sm) {
      padding: var(--onyx-grid-margin);
      flex-direction: column;
    }
  }
}
</style>
