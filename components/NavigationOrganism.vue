<script lang="ts" setup>
import { NavItem } from "./NavItemsMolecule.vue";

const props = defineProps<{
  navItems: NavItem[];
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

    <BurgerMenu
      v-if="props.hasBurger"
      class="nav__burger"
      v-model="isBurgerOpen"
    >
      <NavItemsMolecule
        :nav-items="props.navItems"
        vertical
        @nav-item-click="isBurgerOpen = false"
      />
    </BurgerMenu>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.nav {
  &__items {
    &--has-burger {
      @include breakpoint(m) {
        display: none;
      }
    }
  }

  &__burger {
    display: none;
    font-size: 1.25rem;

    @include breakpoint(m, max) {
      display: block;
    }
  }
}
</style>
