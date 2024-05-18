<script lang="ts" setup>
import type { OnyxNavItemProps } from "sit-onyx";

const props = defineProps<{
  navItems: OnyxNavItemProps[];
  /** If true, a burger menu will be display on mobile. */
  hasBurger?: boolean;
}>();

const isBurgerOpen = ref(false);
</script>

<template>
  <nav class="nav">
    <NavItemsMolecule
      class="nav__items"
      :class="{ 'nav__items--has-burger': props.hasBurger }"
      :nav-items="props.navItems"
    />

    <BurgerMenu v-if="props.hasBurger" v-model="isBurgerOpen" class="nav__burger">
      <NavItemsMolecule
        :nav-items="props.navItems"
        vertical
        @nav-item-click="isBurgerOpen = false"
      />
    </BurgerMenu>
  </nav>
</template>

<style lang="scss" scoped>
@use "sit-onyx/breakpoints.scss";

.nav {
  :deep(.nav__items--has-burger) {
    @include breakpoints.screen(max, sm) {
      display: none;
    }
  }

  &__burger {
    display: none;
    font-size: 1.25rem;

    @include breakpoints.screen(max, sm) {
      display: block;
    }
  }
}
</style>
