<script setup></script>

<template>
  <div class="not-found">
    <h1>404</h1>
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
  color: #f1f1f1;
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
  color: #f1f1f1;
}
</style>
