<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Дані про учнів
const students = [
  { name: "Білич Андрій", logics: ref(0) },
  { name: "Глушко Артем", logics: ref(0) },
  { name: "Головенко Василь", logics: ref(0) },
  { name: "Кисельов Артем", logics: ref(0) },
  { name: "Леміш Аліна", logics: ref(0) },
  { name: "Лозова Олександра", logics: ref(0) },
  { name: "Хоменко Матвій", logics: ref(0) },
  { name: "Шматов Богдан", logics: ref(0) },
];

const loading = ref(true); // Стан завантаження

// Ваш API ключ та ID таблиці
const apiKey = import.meta.env.VITE_API_KEY;
const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID;
const range = "'Python Субота 12:30'!G3:G10"; // Замініть на потрібний діапазон

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

onMounted(async () => {
  try {
    const response = await axios.get(url);
    const sheetData = response.data.values;

    // Прив'язуємо отримані дані до конкретного учня
    students.forEach((student, index) => {
      student.logics.value = sheetData[index][0]; // Перетворюємо значення на число
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false; // Завершуємо завантаження
  }
});
</script>

<template>
  <div class="container">
    <router-link to="/"
      ><img src="/arrow.svg" alt="arrow" width="40"
    /></router-link>
    <h2>Курс Python</h2>
    <h2 class="table-title">Таблиця Логіків</h2>
    <h2 class="group-time">Субота 12:30</h2>
    <!-- Спінер завантаження -->
    <div v-if="loading" class="spinner"></div>
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
          <td class="student-name">{{ student.name }}</td>
          <td>{{ student.logics }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
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
}

.course-link:hover {
  background-color: #5e287c;
}

.logics-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.student-name {
  text-align: left;
}

th {
  background-color: #7a3db8;
  color: #ffffff;
  font-weight: bold;
}

td {
  background-color: #f8f5ff;
  color: #333;
  width: 50%;
}

tbody tr:nth-child(even) {
  background-color: #ede7ff;
}

tbody tr:hover {
  background-color: #d9c9ff;
}
.group-time {
  text-align: center;
}

/* Стиль спінера */
.spinner {
  border: 4px solid #f3f3f3; /* Світло-сірий */
  border-top: 4px solid #7a3db8; /* Фіолетовий */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px; /* Вирівнювання по вертикалі */
}

/* Анімація спінера */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
