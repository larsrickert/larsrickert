<script lang="ts" setup>
import { OnyxPageLayout } from "sit-onyx";
</script>

<template>
  <OnyxPageLayout>
    <div class="onyx-grid onyx-grid-center">
      <slot></slot>
    </div>

    <TheFooter />
  </OnyxPageLayout>
</template>
