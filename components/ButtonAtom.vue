<script lang="ts" setup>
const props = defineProps<{
  text: string;
  href?: string;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <nuxt-link v-if="props.href" class="button" :to="props.href">
    {{ props.text }}
  </nuxt-link>
  <button v-else class="button" @click="emit('click')">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: var(--lr-color-primary);
  border: 1px solid var(--lr-color-primary);
  box-shadow: var(--onyx-shadow-medium-bottom);
  border-radius: 100px;
  padding: 16px 64px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;

  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    color: var(--lr-color-primary);
    background-color: transparent;
  }
}
</style>
