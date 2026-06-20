<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <OnyxNavBar app-name="LR" :app-area="{ link: localePath('/') }">
    <OnyxNavItem :label="$t('about.about')" :link="localePath('/#about')" />
    <OnyxNavItem :label="$t('projects.project', 2)" :link="localePath('/#projects')" />

    <template #globalContextArea>
      <ColorSchemeSwitch />
    </template>
  </OnyxNavBar>
</template>

<style lang="scss" scoped>
:deep(.onyx-nav-bar__app) {
  color: var(--onyx-color-text-icons-primary-intense);
}

:deep(.onyx-nav-bar__nav > ul) {
  justify-content: flex-end;
}
</style>
