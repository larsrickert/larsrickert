<script lang="ts" setup>
import { OnyxAppLayout } from "sit-onyx";
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md">
    <template #navBar> <TheHeader /> </template>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </OnyxAppLayout>
</template>
