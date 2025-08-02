<script lang="ts" setup>
import { OnyxNavItem, type OnyxNavItemProps } from "sit-onyx";

const props = defineProps<{
  navItems: OnyxNavItemProps[];
  vertical?: boolean;
}>();

const emit = defineEmits<{
  navItemClick: [];
}>();

const router = useRouter();

const handleNavItemClick = (href: string) => {
  emit("navItemClick");
  return router.push(href);
};
</script>

<template>
  <ul class="items" :class="{ 'items--vertical': props.vertical }">
    <li v-for="item of navItems" :key="item.href">
      <ClientOnly>
        <OnyxNavItem
          v-bind="item"
          :active="item.href === $route.fullPath"
          @click="handleNavItemClick($event)"
        />
      </ClientOnly>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "sit-onyx/breakpoints.scss";

.items {
  list-style: none;
  margin: 0;
  padding: 0.125rem 0; // ensure nav item underline is displayed
  display: flex;
  gap: var(--onyx-spacing-md);
  flex-wrap: wrap;

  @include breakpoints.screen(max, xs) {
    gap: var(--onyx-spacing-2xs) var(--onyx-spacing-md);
  }

  &--vertical {
    flex-direction: column;
  }
}

.skeleton {
  width: 4rem;
  height: 1.5rem;
}
</style>
