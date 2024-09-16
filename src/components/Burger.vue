<script setup>
import courses from "../data"; // Імпортуємо масив з курсами
</script>

<template>
  <div class="burger-menu animate__animated animate__backInLeft">
    <ul>
      <li v-for="course in courses" :key="course.name">
        <router-link :to="course.link">
          <img :src="course.img" :alt="course.name" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.burger-menu {
  position: fixed;
  top: 20%;
  left: 0;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1),
    /* верхній слабкий шар */ 0px 15px 40px rgba(0, 0, 0, 0.2); /* нижній глибший шар */
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
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
  max-width: 40px;
  height: 40px;
}

.chat-icon {
  position: absolute;
  top: -25px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  text-align: center;
}

@media screen and (min-width: 769px) {
  .burger-menu {
    display: none;
  }
}
</style>
