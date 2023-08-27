<script lang="ts" setup>
import { NavItem } from "./NavigationMolecule.vue";

const navItems: NavItem[] = [
  { label: "Nav item 1", href: "/" },
  { label: "Nav item 2", href: "#section-1" },
  { label: "Nav item 3", href: "#section-2" },
];
</script>

<template>
  <header class="header">
    <div class="header__content">
      <img src="~/assets/images/logo.svg" alt="Logo" class="header__logo" />
      <NavigationMolecule :nav-items="navItems" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  left: 0;
  top: 0;

  box-shadow: var(--lr-box-shadow);
  padding: 16px 32px;
  background-color: var(--lr-color-background);

  &__content {
    max-width: var(--lr-max-page-width);
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
  }

  &__logo {
    width: 256px;
    display: block;
  }
}
</style>
