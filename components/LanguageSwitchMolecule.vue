<script lang="ts" setup>
import { OnyxIconButton, OnyxSkeleton, OnyxTooltip } from "sit-onyx";
import deFlag from "svg-country-flags/svg/de.svg";
import usFlag from "svg-country-flags/svg/us.svg";

const modelValue = defineModel<string>();

const flag = computed(() => (modelValue.value === "de" ? deFlag : usFlag));

const handleClick = () => {
  modelValue.value = modelValue.value === "de" ? "en" : "de";
};
</script>

<template>
  <ClientOnly>
    <OnyxTooltip :text="$t('global.switchLanguage')" position="bottom">
      <!-- empty title is needed so it does not show the default title of the OnyxIconButton -->
      <OnyxIconButton title="" :label="$t('global.switchLanguage')" @click="handleClick">
        <img class="flag" :src="flag" :alt="modelValue" :title="modelValue" />
      </OnyxIconButton>
    </OnyxTooltip>

    <template #fallback>
      <OnyxSkeleton class="flag" />
    </template>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.flag {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: var(--onyx-radius-full);
  object-fit: cover;
  cursor: pointer;
}
</style>
