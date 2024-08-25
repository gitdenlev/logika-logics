<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Упс! Схоже такої сторінки не існує</p>
    <router-link to="/">Повернутись на головну</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.not-found {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 72px;
  color: #7a3db8;
}

p {
  font-size: 24px;
  color: #7a3db8;
}

a {
  font-size: 18px;
  color: #7a3db8;
  text-decoration: underline;
}
</style>
