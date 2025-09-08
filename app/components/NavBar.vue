<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <OnyxNavBar logo-url="/favicon.svg" app-name="Lars Rickert" :app-area="{ link: localePath('/') }">
    <OnyxNavItem :label="$t('home.pageName')" :link="localePath('/')" />

    <template #contextArea>
      <ColorSchemeSwitch />
      <LocaleSwitch />
    </template>
  </OnyxNavBar>
</template>
