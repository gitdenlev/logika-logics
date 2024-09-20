<script setup>
import courses from "../data"; // Імпортуємо масив з курсами
</script>

<template>
  <div class="burger-menu animate__animated animate__backInLeft">
    <ul>
      <li v-for="course in courses" :key="course.name">
        <router-link :to="course.link">
          <img :src="course.icon" :alt="course.name" />
        </router-link>
      </li>
    </ul>
  </div>
  <div class="feedback animate__animated animate__swing">
    <a href="https://t.me/denyalove" target="_blank">
      <img src="/chat.png" alt="chat" />
    </a>
  </div>
</template>

<style scoped>
.burger-menu {
  position: fixed;
  top: 20%;
  left: 0;
  padding: 10px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  border-radius: 30px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1),
    /* верхній слабкий шар */ 0px 15px 40px rgba(0, 0, 0, 0.2); /* нижній глибший шар */
}

li {
  cursor: pointer;
  position: relative;
}

li img:hover {
  transform: scale(1.2);
  transition: transform 0.3s linear;
}

img {
  width: 40px;
  height: 40px;
}

.feedback {
  position: fixed;
  bottom: 0;
  right: 10px;
}

.feedback img {
  width: 50px;
  height: 50px;
}

@media screen and (min-width: 769px) {
  .burger-menu {
    display: none;
  }

  .feedback {
    display: none;
  }
}
</style>
