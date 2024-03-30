<script lang="ts" setup>
import { OnyxButton } from "sit-onyx";

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

const router = useRouter();
const route = useRoute();

const handleNavItemClick = (href: string) => {
  emit("navItemClick");
  return router.push(href);
};
</script>

<template>
  <ul class="items" :class="{ 'items--vertical': props.vertical }">
    <li v-for="item of navItems" :key="item.href">
      <OnyxButton
        :label="item.label"
        mode="plain"
        :variation="item.href === route.fullPath ? 'primary' : 'secondary'"
        @click="handleNavItemClick(item.href)"
      />
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
  gap: var(--onyx-spacing-md);
  flex-wrap: wrap;

  @include breakpoint(xs) {
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
