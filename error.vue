<script lang="ts" setup>
import { OnyxAppLayout, OnyxButton } from "sit-onyx";
import type { UnwrapRef } from "vue";

const props = defineProps<{
  error: UnwrapRef<ReturnType<typeof useError>>;
}>();

// the URL is not included in the error when deployed inside
// a docker container, so we extract it here from the message
const url = computed(() => {
  const errorUrl = props.error && "url" in props.error ? props.error.url : "";
  const extractedUrl = props.error?.message
    .split("Page not found: ")
    .at(1)
    ?.trim();
  return errorUrl || extractedUrl;
});

const handleGoHome = () => clearError({ redirect: "/" });
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md">
    <template #navBar> <TheHeader /> </template>

    <NuxtLayout name="default">
      <template v-if="props.error && 'statusCode' in props.error">
        <h1>{{ $t("notFound.pageName") }}</h1>
        <p>{{ $t("notFound.description", { url }) }}</p>
      </template>

      <OnyxButton
        class="action"
        :label="$t('notFound.goHome')"
        mode="outline"
        @click="handleGoHome"
      />
    </NuxtLayout>
  </OnyxAppLayout>
</template>

<style lang="scss" scoped>
.action {
  margin-top: var(--onyx-spacing-xl);
}
</style>
