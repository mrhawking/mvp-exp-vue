<script setup></script>

<template>
  <div class="backdrop"></div>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<style scoped>
.backdrop {
  position: absolute;
  background-color: rgba(18, 17, 20, 0.7);
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.modal {
  position: absolute;
  z-index: 20;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--main-dark-color-80);
  border: 2px solid var(--main-light-color);
  padding: 50px;
  border-radius: 30px;
}
</style>
