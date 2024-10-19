<script setup></script>

<template>
  <div class="not-found">
    <!-- <img src="/404.png" alt="not found" width="200" /> -->
    <!-- Хеловін тема -->
     <img src="/halloween/reaper.png" alt="reaper" width="200">
    <p>Упс! Схоже, ця сторінка зникла в темряві ночі...</p>
    <div class="link">
      <router-link to="/">Повернутись до лігва</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
  gap: 20px;
  color: black;
}

h1 {
  font-size: 72px;
}

p {
  font-size: 24px;
}

.link {
  margin-top: 10px;
  padding: 10px;
}

a {
  color: black;
  text-decoration: none;
  font-size: 18px;
  border-radius: 30px;
  padding: 15px;
  background-color: #fff;
  width: 100%;
}
</style>
