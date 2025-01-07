<script setup>
import { RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
</script>

<template>
  <div class="main-container">
    <MainHeader />
    <RouterView />
  </div>
</template>
