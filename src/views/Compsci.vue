<script setup></script>

<template>
  <div class="course">
    <h1><img src="/sad.png" alt="compsci" width="40"></h1>
    <p>Поки що не має груп на цьому курсі</p>
    <router-link to="/">Повернутись на головну</router-link>
  </div>
</template>

<style scoped>
.course {
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
