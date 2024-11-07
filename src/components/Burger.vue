<script setup>
import { ref } from "vue";
import courses from "../data"; // Імпортуємо масив з курсами

// Створюємо стан для відображення меню
const isMenuOpen = ref(false);

// Функція для перемикання меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <button @click="toggleMenu" class="burger-icon">
    <img src="/menu.svg" alt="menu" width="40" />
  </button>

  <!-- Перехід для меню з курсами -->
  <transition name="slide">
    <div v-if="isMenuOpen" class="burger-menu">
      <ul>
        <li v-for="course in courses" :key="course.name">
          <router-link :to="course.link">
            <img :src="course.icon" :alt="course.name" />
            {{ course.name }}
          </router-link>
        </li>
      </ul>
      <a class="contact-button" href="https://t.me/denyalove" target="_blank"
        >Написати викладачу</a
      >
    </div>
  </transition>
</template>

<style scoped>
/* Іконка бургер-меню справа вгорі */
.burger-icon {
  position: fixed;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.3s ease;
  padding: 5px;
  border-radius: 5px;
}

/* Бічне меню */
.burger-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #91cfff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

ul {
  list-style-type: none;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center; /* Вирівнюємо весь список по центру */
  padding: 0 15px; /* Додаємо відступ для вирівнювання по краях */
  margin-top: 60px;
}

li {
  display: flex;
  align-items: center; /* Вирівнюємо зображення і текст на одному рівні */
  justify-content: flex-start; /* Вирівнюємо контент по лівому краю */
  gap: 10px;
  font-size: 20px;
  width: 100%; /* Займаємо всю ширину для вирівнювання */
}

li a {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 10px; /* Відступ між зображенням і текстом */
}

li img {
  width: 40px;
  height: 40px;
}

li img:hover {
  transform: scale(1.2);
  transition: transform 0.3s linear;
}

.feedback {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1;
}

.feedback img {
  width: 50px;
  height: 50px;
}

/* Анімація для перехіду меню */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s linear;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(100%);
}

.contact-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #027ffc; /* Колір кнопки */
  border-radius: 30px;
  text-align: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  max-width: 300px;
  margin: 15px auto;
}

@media screen and (min-width: 1023px) {
  .burger-icon,
  .burger-menu {
    display: none;
    overflow: hidden;
    opacity: 0;
  }
}
</style>
