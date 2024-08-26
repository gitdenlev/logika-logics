<script setup>
import FAQ from "@/components/FAQ.vue";

const courses = [
  { name: "Комп'ютерна грамотність", link: "/courses/compsci" },
  { name: "Візуальне програмування", link: "/courses/scratch" },
  { name: "Геймдизайн", link: "/courses/gamedesign" },
  { name: "Веб-дизайн", link: "/courses/webdesign" },
  { name: "Графічний дизайн", link: "/courses/graphicdesign" },
  { name: "Python", link: "/courses/python" },
  { name: "Frontend", link: "/courses/frontend" },
];
</script>

<template>
  <div class="container">
    <h1>Вітаємо на сторінці Logika Logics!</h1>
    <p>
      Тут ви можете переглянути логіки, які діти отримують за роботу на уроці та
      виконання домашніх завдань
    </p>

    <h2>Виберіть курс на якому навчається ваша дитина</h2>
    <ul class="course-list">
      <li v-for="course in courses" :key="course.name">
        <router-link :to="course.link" class="course-link">{{
          course.name
        }}</router-link>
      </li>
    </ul>
  </div>
  <FAQ />
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
  box-shadow: 0 16px 32px rgba(122, 61, 184, 0.6);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

h1 {
  color: #7a3db8;
  text-align: center;
  margin-bottom: 20px;
}

p {
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
</style>
