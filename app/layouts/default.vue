<script lang="ts" setup>
import type { OnyxPageLayoutProps } from "sit-onyx";

const props = defineProps<OnyxPageLayoutProps>();
</script>

<template>
  <OnyxPageLayout v-bind="props">
    <slot></slot>
    <Footer />
  </OnyxPageLayout>
</template>
