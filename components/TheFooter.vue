<script lang="ts" setup>
import type { NavItem } from "./NavItemsMolecule.vue";

const { t } = useI18n();
const localePath = useLocalePath();

const navItems = computed<NavItem[]>(() => {
  return [
    { label: t("imprint.pageName"), href: localePath({ name: "imprint" }) },
    {
      label: t("privacyPolicy.pageName"),
      href: localePath({ name: "privacy-policy" }),
    },
  ];
});
</script>

<template>
  <footer class="footer onyx-text--small">
    <div class="footer__content onyx-grid onyx-grid-center onyx-grid-span-16">
      Lars Rickert © 2023 - {{ t("global.allRightsReserved") }}
      <NavigationOrganism :nav-items="navItems" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--onyx-color-base-background-blank);

  &__content {
    padding: var(--onyx-spacing-3xs) var(--onyx-spacing-md);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--onyx-spacing-md) var(--onyx-spacing-xl);
  }

  $button-height: 2rem;

  :deep(.onyx-button),
  :deep(.onyx-button__label) {
    font-size: inherit;
    line-height: inherit;
    --onyx-button-height: #{$button-height};
  }

  :deep(.onyx-button-skeleton) {
    --onyx-button-height: #{$button-height};
  }
}
</style>
