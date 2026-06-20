<script lang="ts" setup>
import { iconCircleContrast } from "@sit-onyx/icons";
import { type ColorSchemeValue, OnyxUnstableNavButton } from "sit-onyx";

const isOpen = ref(false);
const colorMode = useColorMode();

const colorScheme = computed({
  get: () => {
    if (colorMode.preference === "system") {
      return "auto";
    }
    return colorMode.preference as ColorSchemeValue;
  },
  set: (newValue) => {
    colorMode.preference = newValue === "auto" ? "system" : newValue;
  },
});
</script>

<template>
  <OnyxUnstableNavButton
    :label="$t('onyx.colorScheme.headline')"
    :icon="iconCircleContrast"
    hide-label
    @click="isOpen = true"
  />

  <OnyxColorSchemeDialog v-model="colorScheme" v-model:open="isOpen" />
</template>
