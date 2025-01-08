<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import { provide, ref, watch } from "vue";
</script>

<template>
  <div class="main-container">
    <TheHeader />
    <RouterView />
  </div>
</template>
