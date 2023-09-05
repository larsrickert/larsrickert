<script lang="ts" setup>
const { locale } = useI18n();
</script>

<template>
  <p v-if="locale.toLowerCase() !== 'de'">
    This information is currently only available in German.
  </p>
</template>
