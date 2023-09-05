<script lang="ts" setup>
import { NavItem } from "./NavigationMolecule.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();

const navItems: NavItem[] = [
  { label: t("home.pageName"), href: localePath("/") },
  {
    label: t("home.projects"),
    href: localePath({ path: "/", hash: "#projects" }),
  },
];
</script>

<template>
  <header class="header">
    <div class="header__content">
      <nuxt-link :to="localePath('/')">
        <img
          v-if="locale.toLowerCase() === 'de'"
          src="~/assets/images/logo.svg"
          alt="Logo"
          class="header__logo"
          width="256"
          height="64"
        />
        <img
          v-else
          src="~/assets/images/logo-en.svg"
          alt="Logo"
          class="header__logo"
          width="256"
          height="64"
        />
      </nuxt-link>
      <NavigationMolecule :nav-items="navItems" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.header {
  position: sticky;
  left: 0;
  top: 0;

  box-shadow: var(--lr-box-shadow);
  padding: 16px;
  background-color: var(--lr-color-background);
  z-index: 10;
  max-width: 100vw;

  &__content {
    max-width: var(--lr-max-page-width);
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;

    @include breakpoint(s) {
      gap: 32px;
    }
  }

  &__logo {
    width: 256px;
    max-width: 100%;
    height: auto;
    display: block;

    @include breakpoint(s) {
      width: 180px;
    }
  }
}
</style>
