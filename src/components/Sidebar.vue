<script setup>
import courses from "../data.js";
</script>

<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li v-for="course in courses" :key="course.name">
        <div class="sidebar-item">
          <img
            :src="course.icon"
            alt=""
            class="course-icon"
            :class="{ active: course.link === $route.path }"
          />
          <router-link
            :class="course.link === $route.path ? 'active' : ''"
            :to="course.link"
            class="sidebar-link"
          >
            {{ course.name }}
          </router-link>
        </div>
      </li>
    </ul>

    <div class="halloween-info">
      <h2>Акція</h2>
      <h3>
        Приходь на заняття в хеловінському костюмі та отримуй додаткові 5
        логіків
      </h3>
    </div>

    <a class="contact-button" href="https://t.me/denyalove" target="_blank"
      >Написати викладачу</a
    >
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  /* Хеловін тема */
  background-color: #2b1a29; /* Темний фон для сайдбара */
  background: linear-gradient(to bottom, #3d2b3c, #2b1a29); /* Градієнт */
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Додана більш виразна тінь */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo-container {
  margin-bottom: 1em;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.sidebar-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.course-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  /* Хеловін тема */
  filter: grayscale(30%) brightness(60%) contrast(80%);
}

.sidebar-link {
  text-decoration: none;
  padding: 10px;
  border-radius: 25px;
  transition:
    background-color 0.3s,
    transform 0.2s;
  flex-grow: 0.1;
  text-align: center;
  color: white;
}

.sidebar-link:hover {
  background-color: #3599db;
  /* Хеловін тема */
  background-color: #abaf3f;
  transform: translateX(5px);
  color: black;
}

/* .sidebar-link.active img {
  filter: 0;
} */

.sidebar-link.active {
  background-color: #3599db;
  /* Хеловін тема */
  background-color: #abaf3f;
  color: black;
}

.course-icon.active {
  filter: none;
}

.contact-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #027ffc; /* Колір кнопки */
  border-radius: 30px;
  text-align: center;
  /* color: white; */
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  /* Хеловін тема */
  background-color: #abaf3f;
  color: black;
}

/* Хеловін тема */
.contact-button::after {
  content: url(/halloween/pumpkin.png);
  display: inline-block;
  position: absolute;
  top: -25px;
  right: 0;
  transform: rotate(15deg);
  width: 50px;
  height: 50px;
}

@keyframes fly {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(5px) translateY(-5px) rotate(15deg);
  }
  50% {
    transform: translateX(10px) translateY(5px) rotate(-15deg);
  }
  75% {
    transform: translateX(5px) translateY(-5px) rotate(15deg);
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
}

@media screen and (min-width: 360px) and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}

/* Хеловін тема */
.halloween-info {
  background-color: #472d3c; /* Темний фон для блоку */
  color: #f0e68c; /* Кольори, які поєднуються з Halloween темою */
  padding: 15px;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  max-width: 300px; /* Обмеження ширини */
  margin-bottom: 15px;
}

.halloween-info h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ffd700; /* Золотистий колір для заголовку */
}

.halloween-info h3 {
  font-weight: normal;
  color: white;
}
</style>
