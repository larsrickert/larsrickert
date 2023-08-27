<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <button class="button" @click="emit('click')">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: var(--lr-color-primary);
  border: 1px solid var(--lr-color-primary);
  box-shadow: var(--lr-box-shadow);
  border-radius: 100px;
  padding: 16px 64px;
  cursor: pointer;
  transition: all 0.3s;

  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: normal;

  &:hover {
    color: var(--lr-color-primary);
    background-color: #fff;
  }
}
</style>
