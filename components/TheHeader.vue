<script lang="ts" setup>
import type { OnyxNavItemProps } from "sit-onyx";

const { t, locale, setLocale } = useI18n();
const localePath = useLocalePath();

const navItems = computed(() => {
  return [
    { label: t("home.pageName"), href: localePath("/") },
    {
      label: t("home.about.headline"),
      href: localePath({ path: "/", hash: "#about" }),
    },
    {
      label: t("home.projects"),
      href: localePath({ path: "/", hash: "#projects" }),
    },
  ] satisfies OnyxNavItemProps[];
});

const localeModel = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});
</script>

<template>
  <header class="header">
    <div class="header__content">
      <nuxt-link :to="localePath('/')" class="header__logo">
        <img
          v-if="locale.toLowerCase() === 'de'"
          src="~/assets/images/logo.svg"
          alt="Logo"
          width="256"
          height="64"
        />
        <img v-else src="~/assets/images/logo-en.svg" alt="Logo" width="256" height="64" />
      </nuxt-link>

      <div class="header__nav">
        <NavigationOrganism :nav-items="navItems" has-burger />
        <LanguageSwitchMolecule v-model="localeModel" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "sit-onyx/breakpoints.scss";

.header {
  box-shadow: var(--onyx-shadow-soft-right);
  background-color: var(--onyx-color-base-background-blank);

  &__content {
    width: 100%;
    margin-inline: var(--onyx-grid-margin-inline);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--onyx-spacing-3xl);
    max-width: var(--onyx-grid-max-width);
    padding: var(--onyx-spacing-md) var(--onyx-grid-margin);

    @include breakpoints.screen(max, sm) {
      gap: var(--onyx-spacing-xl);
    }
  }

  &__nav {
    display: flex;
    gap: var(--onyx-spacing-lg);
    justify-content: flex-end;
    align-items: center;

    @include breakpoints.screen(max, sm) {
      gap: var(--onyx-spacing-xl);
      flex-direction: row-reverse;
    }
  }

  &__logo {
    width: 14rem;
    max-width: 100%;
    height: auto;
    display: flex;
    box-sizing: border-box;

    img {
      width: 100%;
      height: 100%;
    }

    @include breakpoints.screen(max, sm) {
      width: 10rem;
    }

    &:focus-visible {
      outline: var(--app-outline);
      border-radius: var(--onyx-radius-sm);
    }
  }
}
</style>
