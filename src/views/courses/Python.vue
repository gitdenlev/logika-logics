<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const students = [
  { student: "Білич Андрій", logics: 335 },
  { student: "Глушко Артем", logics: 315 },
  { student: "Головенко Василь", logics: 319 },
  { student: "Кисельов Артем", logics: 330 },
  { student: "Леміш Аліна", logics: 310 },
  { student: "Лозова Олекснадра", logics: 310 },
  { student: "Хоменко Матвій", logics: 310 },
  { student: "Шматов Богдан", logics: 310 },
];

const logics = [];

const sheetData = ref("");
const loading = ref(true); // Loading state

onMounted(async () => {
  try {
    const response = await axios.get("/api/sheet-data");
    sheetData.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false; // Set loading to false once data is fetched
  }
});

import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterLink to="/">
      <img src="/arrow.svg" alt="arrow" width="40" />
    </RouterLink>
    <h2>Курс Python</h2>
    <ul class="course-list">
      <li v-for="course in courses" :key="course.name">
        <a :href="course.link" class="course-link">{{ course.name }}</a>
      </li>
    </ul>
        <h2 class="group-time">Субота 12:30</h2>

    <!-- Loading spinner -->
    <div v-if="loading" class="spinner"></div>
    <!-- Table -->
    <table v-else class="logics-table">
      <thead>
        <tr>
          <th>Учень</th>
          <th>Кількість логіків</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.student">
          <td class="student-name">{{ student.student }}</td>
          <td v-for="(logics, index) in sheetData" :key="index">
            {{ logics }}
          </td>
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
  margin-top: 20px;
}

/* Spinner style */
.spinner {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #7a3db8; /* Purple */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px; /* Center vertically */
}

/* Spinner animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>
