<script setup>
import { RouterLink } from "vue-router";

RouterLink;

const props = defineProps({
  isLink: Boolean,
  to: String,
});
</script>

<template>
  <component
    class="btn-primary"
    :is="isLink ? 'RouterLink' : 'button'"
    :to="isLink ? to : undefined"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.btn-primary {
  background-color: var(--accent-color);
  color: var(--main-dark-color);
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid var(--main-light-color);
  border-radius: 60px;
  padding: 10px 40px;
}
</style>
