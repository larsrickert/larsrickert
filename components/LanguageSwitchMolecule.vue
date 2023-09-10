<script lang="ts" setup>
import deFlag from "svg-country-flags/svg/de.svg";
import usFlag from "svg-country-flags/svg/us.svg";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const flag = computed(() => (props.modelValue === "de" ? deFlag : usFlag));

const handleClick = () => {
  const newLocale = props.modelValue === "de" ? "en" : "de";
  emit("update:modelValue", newLocale);
};
</script>

<template>
  <img
    class="flag"
    :src="flag"
    :alt="props.modelValue"
    :title="$t('global.switchLanguage')"
    @click="handleClick"
  />
</template>

<style lang="scss" scoped>
.flag {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}
</style>
