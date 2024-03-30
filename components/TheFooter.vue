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
  <footer class="footer">
    <div class="footer__content">
      Lars Rickert © 2023 - {{ t("global.allRightsReserved") }}
      <NavigationOrganism :nav-items="navItems" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--lr-color-background-accent);
  color: #fff;
  padding: 16px 32px;
  font-size: 0.9rem;
  line-height: 0.9rem;

  &__content {
    max-width: var(--lr-max-page-width);
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px 32px;
  }
}
</style>
