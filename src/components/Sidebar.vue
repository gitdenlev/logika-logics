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
  color: black;
}

.sidebar-link:hover {
  background-color: #3599db;
  transform: translateX(5px);
  color: #f1f1f1;
}

.sidebar-link.active {
  background-color: #3599db;
  color: #f1f1f1;
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
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
}


@media screen and (min-width: 360px) and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
