<script lang="ts" setup>
import { UnwrapRef } from "vue";

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

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <TheHeader />

    <main class="page">
      <template v-if="props.error && 'statusCode' in props.error">
        <h1>{{ $t("notFound.pageName") }}</h1>
        <p>{{ $t("notFound.description", { url }) }}</p>
      </template>

      <ButtonAtom
        class="action"
        :text="$t('notFound.goHome')"
        @click="handleError"
      />
    </main>
  </div>

  <TheFooter />
</template>

<style lang="scss" scoped>
.action {
  margin-top: 32px;
}
</style>
