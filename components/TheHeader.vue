<script lang="ts" setup>
const props = defineProps<{
  modelValue?: unknown;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: unknown];
}>();

const route = useRoute();

const navItems = [
  { label: "Nav item 1", href: "/" },
  { label: "Nav item 2", href: "#section-1" },
  { label: "Nav item 3", href: "#section-2" },
];
</script>

<template>
  <header class="header">
    <div class="header__content">
      <img src="~/assets/images/logo.svg" alt="Logo" class="header__logo" />

      <nav>
        <ul class="header__nav">
          <li v-for="item of navItems" :key="item.href">
            <ClientOnly>
              <RouterLink
                :to="item.href"
                :class="{ active: item.href === (route.hash || route.path) }"
              >
                {{ item.label }}
              </RouterLink>
            </ClientOnly>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  left: 0;
  top: 0;

  box-shadow: var(--lr-box-shadow);
  padding: 16px 32px;
  background-color: var(--lr-color-background);

  &__content {
    max-width: var(--lr-max-page-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
  }

  &__logo {
    width: 256px;
    display: block;
  }

  &__nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 16px 32px;
    flex-wrap: wrap;

    a {
      color: var(--lr-color-font);
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        color: var(--lr-color-primary);
      }

      &.active {
        color: var(--lr-color-primary);
        font-weight: 700;
      }
    }
  }
}
</style>
