<script lang="ts" setup>
export type NavItem = {
  label: string;
  href: string;
};

const props = defineProps<{
  navItems: NavItem[];
  vertical?: boolean;
}>();

const emit = defineEmits<{
  navItemClick: [];
}>();

const route = useRoute();
</script>

<template>
  <ul class="items" :class="{ 'items--vertical': props.vertical }">
    <li v-for="item of navItems" :key="item.href">
      <ClientOnly>
        <nuxt-link
          :to="item.href"
          class="item"
          :class="{
            'item--active': item.href === route.fullPath,
          }"
          @click="emit('navItemClick')"
        >
          {{ item.label }}
        </nuxt-link>
      </ClientOnly>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px 32px;
  flex-wrap: wrap;

  @include breakpoint(s) {
    gap: 8px 16px;
  }

  &--vertical {
    flex-direction: column;
  }
}

.item {
  color: currentColor;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: var(--lr-color-primary);
  }

  &--active {
    color: var(--lr-color-primary);
    font-weight: 700;
  }
}
</style>
