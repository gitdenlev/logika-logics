<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import TypeIt from "typeit";
import Sidebar from "../components/Sidebar.vue";
import Burger from "../components/Burger.vue";

// Props для динамічних даних
const props = defineProps({
  courseTitle: String,
  courseIcon: String,
  students: Array,
  ranges: Array,
});

const loading = ref(true); // Стан завантаження

const apiKey = import.meta.env.VITE_API_KEY;
const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID;

const urls = props.ranges.map(
  (range) =>
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
);

onMounted(async () => {
  try {
    const responses = await axios.all(urls.map((url) => axios.get(url)));
    const sheetsData = responses.map((response) => response.data.values);

    props.students[0].forEach((student, index) => {
      if (sheetsData[1][index] && sheetsData[1][index][0] !== undefined) {
        student.logics.value = sheetsData[1][index][0]; // Дані для першої групи
      }
    });

    props.students[1].forEach((student, index) => {
      if (sheetsData[0][index] && sheetsData[0][index][0] !== undefined) {
        student.logics.value = sheetsData[0][index][0]; // Дані для другої групи
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false; // Завершуємо завантаження
  }

  new TypeIt("#course-title", {
    strings: props.courseTitle,
    speed: 100,
    loop: false,
    cursor: false,
  }).go();
});
</script>

<template>
  <div class="content">
    <Sidebar />
    <Burger />
    <div class="header">
      <div
        class="course-info animate__animated animate__bounceIn animate__delay-1s"
      >
        <img :src="courseIcon" alt="frontend" class="course-icon" width="60" />
      </div>
      <h1 id="course-title"></h1>
    </div>

    <div class="loading" v-if="loading">
      <img src="/halloween/skull.png" alt="logo" width="80" />
    </div>

    <div class="halloween-container" v-else>
      <table class="logics-table">
        <thead>
          <tr>
            <th class="student-name-title">Учень</th>
            <th>Кількість логіків</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students[0]" :key="student.name">
            <td class="student-name">{{ student.name }}</td>
            <td class="logics">{{ student.logics.value }}</td>
          </tr>
        </tbody>
      </table>

      <div class="group-separator"></div>

      <table class="logics-table">
        <tbody>
          <tr v-for="student in students[1]" :key="student.name">
            <td class="student-name">{{ student.name }}</td>
            <td class="logics">{{ student.logics.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  margin-left: 250px; /* Відступ для сайдбару */
}

.content::before {
  content: url("/halloween/spider-web.png");
  position: fixed;
  top: 93%;
  right: -30px;
}

.header {
  display: flex;
  align-items: center;
  gap: 30px;
  color: black;
}

.course-info {
  display: flex;
  flex-direction: column; /* Вертикальне вирівнювання */
  align-items: center; /* Центруємо по горизонталі */
}

.course-info h1 {
  margin: 0;
  padding-top: 20px;
  color: black;
}

.logics-table {
  margin-top: 20px; /* Відступ від хедера */
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 15px;
  overflow: hidden; /* Щоб уникнути зрізів */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Легка тінь для виділення */
}

th,
td {
  padding: 15px;
  font-weight: bold;
}

th {
  /* background: linear-gradient(145deg, #3498db, #2980b9); */
  /* Хеловін тема */
  background-color: #abaf3f;
  color: black;
  font-size: 1.1rem;
  position: relative;
  /* border-bottom: 2px solid #2980b9; */
}

th {
  font-size: 1.5rem;
}

.student-name,
.logics {
  font-size: 1.3rem;
}

td {
  background-color: #ffffff;
  color: #333;
  font-size: 1rem;
  border-bottom: 1px solid #ddd; /* Легка межа між рядками */
  font-size: 1.1rem;
}

tbody tr:nth-child(even) {
  background-color: #f5f5f5; /* Легке чергування рядків */
}

tbody tr:hover {
  background-color: #e0f7fa; /* Світло-блакитний фон при наведенні */
}

.logics {
  text-align: center;
  width: 50%;
  padding: 15px;
  background: linear-gradient(145deg, #f5f5f5, #ffffff); /* Легкий градієнт */
}

.loading {
  margin: 20px auto;
  animation: spinAndFlip 1s linear infinite;
  display: flex;
  justify-content: center; /* Горизонтальне центрування */
  align-items: center; /* Вертикальне центрування */
  width: 100%;
  height: 100%;
}

.burger {
  overflow: hidden;
  position: absolute;
  top: 5%;
  right: 5%; /* Зміщення праворуч */
  display: flex;
  justify-content: center; /* Горизонтальне центрування */
  align-items: center; /* Вертикальне центрування */
  background: #3498db;
  color: white;
  border-radius: 30px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Легка тінь */
  transition: background 0.3s linear; /* Плавний перехід кольору */
}

.burger:hover {
  background: #2980b9; /* Зміна кольору при наведенні */
}

.burger-item {
  display: flex;
  justify-content: center; /* Горизонтальне центрування */
  align-items: center; /* Вертикальне центрування */
  padding: 10px;
  gap: 10px;
  font-size: 18px;
}

@keyframes spinAndFlip {
  0% {
    transform: scaleX(1);
  }
  25% {
    transform: scaleX(1.1);
  }
  50% {
    transform: scaleX(-1);
  }
  75% {
    transform: scaleX(1.1);
  }
  100% {
    transform: scaleX(1);
  }
}

@media screen and (min-width: 360px) {
  .header {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  .content {
    margin-left: 0px;
    width: 100%;
  }
  .logics {
    width: 50%;
  }

  th {
    padding: 20px;
  }

  .logics {
    padding: 30px;
  }
  .burger {
    display: flex;
  }
}

@media screen and (min-width: 769px) {
  .content {
    margin-left: 350px;
  }
}

@media screen and (min-width: 1024px) {
  .content {
    margin-left: 400px;
  }
}
#course-title {
  font-weight: bold;
}

/* Хеловін тема */
.halloween-container::before {
  content: url(/halloween/bat.png);
  display: block;
  position: fixed;
  right: 5%;
  z-index: 1;
  animation: bat 10s linear infinite;
}

@media screen and (max-width: 768px) {
  .halloween-container::before {
    position: absolute;
    top: 5%;
    right: 5%;
  }
}

@media screen and (min-width: 768px) {
  .halloween-container::before {
    position: absolute;
    top: 4%;
    right: 5%;
  }
}

/* Хеловін тема */
@keyframes bat {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(-5deg);
  }
  50% {
    transform: translateY(-40px) translateX(0px) rotate(5deg);
  }
  75% {
    transform: translateY(-20px) translateX(-10px) rotate(-5deg);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
}
</style>