<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li v-for="course in courses" :key="course.name">
        <div class="sidebar-item">
          <img :src="course.icon" alt="" class="course-icon" />
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

<script setup>
const courses = [
  {
    name: "Комп'ютерна грамотність",
    link: "/compsci",
    icon: "/compsci.png",
  },
  { name: "Scratch", link: "/scratch", icon: "/scratch.svg" },
  { name: "Геймдизайн", link: "/gamedesign", icon: "/gamedesign.png" },
  { name: "Веб-дизайн", link: "/webdesign", icon: "/webdesign.png" },
  {
    name: "Графічний дизайн",
    link: "/graphicdesign",
    icon: "/graphicdesign.png",
  },
  { name: "Python", link: "/python", icon: "/python.png" },
  { name: "Frontend", link: "/frontend", icon: "/frontend.png" },
];
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;
  background-color: #92d0ff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Додана тінь */
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
}

.course-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.sidebar-link {
  color: black;
  text-decoration: none;
  padding: 10px;
  border-radius: 25px;
  transition: background-color 0.3s, transform 0.2s;
  flex-grow: 0.1;
  text-align: center;
}

.sidebar-link:hover {
  background-color: #3599db;
  transform: translateX(5px);
  color: white;
}

.sidebar-link.active {
  background-color: #3599db;
  color: white;
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
  transition: all 0.3s linear;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

.contact-button:hover {
  transform: scale(1.05);
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
</style>
