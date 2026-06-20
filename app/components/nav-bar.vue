<script lang="ts" setup>
import iconGitHub from "~/assets/icons/github.svg?raw";
import iconLinkedIn from "~/assets/icons/linkedin.svg?raw";

const localePath = useLocalePath();
</script>

<template>
  <OnyxNavBar app-name="LR" :app-area="{ link: localePath('/') }">
    <OnyxNavItem :label="$t('about.about')" :link="localePath('/#about')" />
    <OnyxNavItem :label="$t('projects.project', 2)" :link="localePath('/#projects')" />

    <template #globalContextArea>
      <ColorSchemeSwitch />
      <OnyxSeparator orientation="vertical" />
      <OnyxUnstableNavButton
        label="GitHub"
        :icon="iconGitHub"
        hide-label
        :link="{ href: 'https://github.com/larsrickert', target: '_blank' }"
      />
      <OnyxUnstableNavButton
        label="LinkedIn"
        :icon="iconLinkedIn"
        hide-label
        :link="{ href: 'https://www.linkedin.com/in/lars-rickert-392857255', target: '_blank' }"
      />
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

:deep(.onyx-nav-bar__mobile-global-context) {
  .onyx-separator {
    height: var(--onyx-separator-min-size);
    width: var(--onyx-separator-size);
    min-width: unset;
  }
}

:deep(.onyx-nav-item--navbar) {
  font-size: 0.875rem;
}
</style>
