<script lang="ts" setup>
import { OnyxPageLayout } from "sit-onyx";
</script>

<template>
  <OnyxPageLayout>
    <div class="page-content">
      <slot></slot>
    </div>

    <TheFooter />
  </OnyxPageLayout>
</template>
