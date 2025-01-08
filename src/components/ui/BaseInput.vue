<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  isTextArea: Boolean,
  modelValue: [String, Number],
});

const emit = defineEmits(["update:modelValue"]);
const model = defineModel();
</script>

<template>
  <textarea v-if="isTextArea" class="formField" v-model="model" />
  <input v-else class="formField" v-model="model" />
  <!-- <component
    class="formField"
    :is="isTextArea ? 'textarea' : 'input'"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  /> -->
</template>

<style scoped>
.formField {
  color: var(--main-light-colo);
  background-color: var(--accent-color-30);
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
}
</style>
