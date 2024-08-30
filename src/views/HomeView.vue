<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";

const isOpen = ref(false);
const topStudents = [
  { name: "Білич Андрій", logics: 350 },
  { name: "Лозова Олександра", logics: 300 },
  { name: "Шматов Богдан", logics: 250 },
]; // Замініть це на динамічні дані з API

function toggleWindow() {
  isOpen.value = !isOpen.value;
}

function toggleWindowRating() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="container">
    <Sidebar />
    <h1>Вітаємо на сайті Logika Logics</h1>
    <div class="icons">
      <div class="stories" @click="toggleWindow">
        <img src="/logo.svg" alt="logo" width="20" />
      </div>

      <div class="top" @click="toggleWindowRating">
        <img src="/top.png" alt="top" width="30" />
        <div v-if="isOpen" class="top-popup">
          <h3>Топ-3 учні</h3>
          <ul>
            <li v-for="student in topStudents" :key="student.name">
              <span>{{ student.name }}</span>
              <span>{{ student.logics }} логіків</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="top" @click="toggleWindowRating">
        <img src="/gamepad.png" alt="top" width="30" />
        <div v-if="isOpen" class="top-popup">
          <h3>Топ-3 учні</h3>
          <ul>
            <li v-for="student in topStudents" :key="student.name">
              <span>{{ student.name }}</span>
              <span>{{ student.logics }} логіків</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="popup-window">
        <div>
          <img src="/test.jpg" alt="logo" width="200" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin: 0 auto;
  padding: 20px;
  width: 70%;
  position: relative;
}

.icons {
  display: flex;
  gap: 20px;
  position: absolute;
  top: 10px;
  left: 10%;
}

.stories {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 50%,
    rgba(131, 58, 180, 1) 100%
  );
  margin-bottom: 10px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(4, 114, 255, 1) 0%,
    rgba(252, 176, 69, 1) 50%,
    rgba(131, 58, 180, 1) 100%
  );
  position: relative;
  cursor: pointer;
}

.top-popup {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 200px;
  z-index: 10;
}

.top-popup h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.top-popup ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.top-popup li {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.top-popup li:last-child {
  border-bottom: none;
}

.top-popup span {
  font-size: 0.9rem;
  color: #555;
}

.popup-window {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 16px 32px rgba(122, 61, 184, 0.6);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.stories::after:hover {
  content: "Новини Logika";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 50%,
    rgba(131, 58, 180, 1) 100%
  );
  z-index: -1;
  border-radius: 50%;
}


@media screen and (min-width: 360px) {
  .container {
    width: 30%;
  } 
}

@media screen and (min-width: 768px) {
  .container {
    width: 35%;
  }
}
</style>
