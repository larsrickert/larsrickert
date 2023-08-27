<script lang="ts" setup>
export type NavItem = {
  label: string;
  href: string;
};

const props = defineProps<{
  navItems: NavItem[];
  light?: boolean;
}>();

const route = useRoute();
</script>

<template>
  <nav>
    <ul class="nav">
      <li v-for="item of navItems" :key="item.href">
        <nuxt-link
          :to="item.href"
          class="nav__item"
          :class="{
            'nav__item--active': item.href === (route.hash || route.path),
            'nav__item--light': props.light,
          }"
        >
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px 32px;
  flex-wrap: wrap;

  &__item {
    color: var(--lr-color-font);
    text-decoration: none;
    transition: all 0.3s;

    &--light {
      color: #fff;
    }

    &:hover {
      color: var(--lr-color-primary);
    }

    &--active {
      color: var(--lr-color-primary);
      font-weight: 700;
    }
  }
}
</style>
