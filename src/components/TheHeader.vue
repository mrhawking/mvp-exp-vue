<script setup>
import MainButton from "./ui/MainButton.vue";

const emit = defineEmits(["createExperiment"]);
</script>

<template>
  <header class="main-header">
    <div class="inner">
      <MainButton is-link to="/completed">Завершенные</MainButton>
      <MainButton is-link to="/create">Создать</MainButton>
    </div>
    <MainButton>Выйти</MainButton>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}

.inner {
  display: flex;
  gap: 20px;
}
</style>
