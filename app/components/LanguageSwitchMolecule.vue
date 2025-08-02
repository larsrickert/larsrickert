<script lang="ts" setup>
import { flagDE, flagUS } from "@sit-onyx/flags";
import { OnyxIconButton, OnyxSkeleton, OnyxTooltip } from "sit-onyx";

const modelValue = defineModel<string>();

const flag = computed(() => (modelValue.value === "de" ? flagDE : flagUS));

const handleClick = () => {
  modelValue.value = modelValue.value === "de" ? "en" : "de";
};
</script>

<template>
  <ClientOnly>
    <OnyxTooltip :text="$t('global.switchLanguage')" position="bottom">
      <!-- empty title is needed so it does not show the default title of the OnyxIconButton -->
      <OnyxIconButton
        title=""
        :label="$t('global.switchLanguage')"
        :icon="flag"
        @click="handleClick"
      />
    </OnyxTooltip>

    <template #fallback>
      <OnyxSkeleton class="flag-skeleton" />
    </template>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.flag-skeleton {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: var(--onyx-radius-full);
  object-fit: cover;
  cursor: pointer;
}
</style>
