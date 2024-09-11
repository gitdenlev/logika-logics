<script setup></script>

<template>
  <div class="not-found">
    <img src="/404.png" alt="not found" width="200">
    <p>Упс! Схоже такої сторінки не існує</p>
    <router-link to="/">Повернутись на головну</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}

h1 {
  font-size: 72px;
}

p {
  font-size: 24px;
}

a {
  font-size: 18px;
  text-decoration: underline;
}
</style>
