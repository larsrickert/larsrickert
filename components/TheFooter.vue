<script lang="ts" setup>
import { NavItem } from "./NavigationMolecule.vue";

const navItems: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "/datenschutzerklaerung" },
];
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      Lars Rickert © 2023 - Alle Rechte vorbehalten
      <NavigationMolecule :nav-items="navItems" light />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #444;
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
