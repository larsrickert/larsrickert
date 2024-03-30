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
      <ClientOnly>
        <OnyxButton
          :label="item.label"
          mode="plain"
          :variation="item.href === route.fullPath ? 'primary' : 'secondary'"
          @click="handleNavItemClick(item.href)"
        />

        <template #fallback>
          <OnyxButton :label="item.label" skeleton />
        </template>
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
  gap: var(--onyx-spacing-md);
  flex-wrap: wrap;

  @include breakpoint(s) {
    gap: var(--onyx-spacing-2xs) var(--onyx-spacing-md);
  }

  &--vertical {
    flex-direction: column;
  }
}
</style>
