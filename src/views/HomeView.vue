<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const courses = [
  { name: "Комп'ютерна грамотність", link: "/courses/compsci" },
  { name: "Візуальне програмування", link: "/courses/scratch" },
  { name: "Геймдизайн", link: "/courses/gamedesign" },
  { name: "Веб-дизайн", link: "/courses/webdesign" },
  { name: "Графічний дизайн", link: "/courses/graphicdesign" },
  { name: "Python", link: "/courses/python" },
  { name: "Frontend", link: "/courses/frontend" },
];

const showIcons = ref(false);

function toggleIcons() {
  showIcons.value = !showIcons.value;
}

</script>

<template>
  <div class="container">
    <h1>Вітаємо на сторінці Logika!</h1>
    <p>
      Тут ви можете переглянути логіки, які діти отримують за роботу на уроці та
      виконання домашніх завдань
    </p>

    <h2>Виберіть курс на якому навчається ваша дитина</h2>
    <ul class="course-list">
      <li v-for="course in courses" :key="course.name">
        <a :href="course.link" class="course-link">{{ course.name }}</a>
      </li>
    </ul>
  </div>

  <div class="faq-container" @click="toggleIcons">
    <img src="/faq.svg" alt="FAQ" width="40" />
    <img
      :class="{ visible: showIcons, unvisible: !showIcons }"
      src="/telegram.svg"
      alt="Telegram"
      width="40"
      class="telegram-icon"
    />
    <img
      :class="{ visible: showIcons, unvisible: !showIcons }"
      src="/call.svg"
      alt="Phone"
      width="40"
      class="phone-icon"
    />
  </div>
</template>

<style scoped>
body {
  background-color: #f3f0ff;
  font-family: "Arial", sans-serif;
}

.container {
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h1 {
  color: #7a3db8;
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

h2 {
  color: #5e287c;
  margin-top: 30px;
}

.course-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 30px;
}

.course-link {
  text-decoration: none;
  color: #ffffff;
  background-color: #7a3db8;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.course-link:hover {
  background-color: #5e287c;
}

.faq-container {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.telegram-icon,
.phone-icon {
  position: absolute;
  transition: all 0.4s ease;
  opacity: 0;
}

.telegram-icon.visible {
  transform: translateX(-60px);
  opacity: 1;
}

.phone-icon.visible {
  transform: translateY(-60px);
  opacity: 1;
}

.telegram-icon.unvisible {
  transform: translateY(-0px);
  opacity: 0;
}

.phone-icon.unvisible {
  transform: translateY(-0px);
  opacity: 0;
}
</style>
