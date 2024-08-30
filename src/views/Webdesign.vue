<template>
  <div class="content">
    <Sidebar />
    <div class="header">
      <div class="course-info">
        <img src="/webdesign.png" alt="Python" class="course-icon" width="40" />
        <h1>Курс Веб-дизайн</h1>
      </div>
    </div>
    <!-- Спінер завантаження -->
    <div class="loading" v-if="loading">
      <img src="/logo.svg" alt="logo" width="40" />
    </div>

    <!-- Таблиця -->
    <table v-else class="logics-table">
      <thead>
        <tr>
          <th>Учень</th>
          <th>Кількість логіків</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.name">
          <td class="student-name">
            {{ student.name }}
            <img
              v-if="student.logics.value >= 300"
              :src="medalImages[0]"
              alt="gold medal"
              class="medal"
              width="20"
            />
            <img
              v-else-if="student.logics.value >= 200"
              :src="medalImages[1]"
              alt="silver medal"
              class="medal"
              width="20"
            />
            <img
              v-else-if="student.logics.value >= 100"
              :src="medalImages[2]"
              alt="bronze medal"
              class="medal"
              width="20"
            />
          </td>
          <td class="logics">{{ student.logics.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Sidebar from "../components/Sidebar.vue";

const students = [
  { name: "Березень Олександра", logics: ref(0) },
  { name: "Дупак Владимир", logics: ref(0) },
  { name: "Кірков Євген", logics: ref(0) },
  { name: "Оленів Микита", logics: ref(0) },
  { name: "Онищенко Володимир", logics: ref(0) },
  { name: "Пода Ілля", logics: ref(0) },
  { name: "Слабко Роман", logics: ref(0) },
];

const loading = ref(true); // Стан завантаження

// Ваш API ключ та ID таблиці
const apiKey = import.meta.env.VITE_API_KEY;
const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID;
const range = "'Вебдизайн Субота 17:00'!G3:G9"; // Замініть на потрібний діапазон

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

onMounted(async () => {
  try {
    const response = await axios.get(url);
    const sheetData = response.data.values;

    students.forEach((student, index) => {
      student.logics.value = Number(sheetData[index][0]) || 0; // Перетворюємо на число і встановлюємо 0, якщо дані відсутні
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
});

const medalImages = [
  "/medal-gold.svg",
  "/medal-silver.svg",
  "/medal-bronze.svg",
];
</script>

<style scoped>
.content {
  display: flex;
  position: relative;
  margin-left: 250px; /* Додайте відступ, щоб врахувати ширину сайдбару */
  width: calc(
    100% - 250px
  ); /* Додайте ширину контенту, яка буде залежати від ширини сайдбару */
}

.header {
  position: absolute;
  display: flex;
  align-items: center;
  color: #f1f1f1;
}

.course-info h1 {
  margin: 0;
  font-size: 2rem;
}

.course-info p {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.logics-table {
  margin-top: 70px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  border: none;
}

th,
td {
  padding: 15px;
  font-weight: normal;
  border: 1px solid #ddd;
  font-weight: bold;
}

th {
  background-color: #3498db;
  color: #ffffff;
  font-size: 1.1rem;
  border: none;
}

td {
  background-color: #ffffff;
  color: #333;
  font-size: 1rem;
}

td.logics {
  text-align: center;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Легке чергування рядків */
}

tbody tr:hover {
  background-color: #e0e0e0; /* Тло при наведенні */
}

.loading {
  margin: 20px auto;
  animation: spinAndFlip 1s linear infinite;
  position: relative; /* Важливо для коректного розташування абсолютного елемента */
  width: 100%; /* Або фіксована ширина, якщо потрібно */
  height: 100%; /* Або фіксована висота, якщо потрібно */
  display: flex; /* Використовуємо flexbox для центрування */
  justify-content: center; /* Горизонтальне центрування */
  align-items: center;
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

.course-info {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
