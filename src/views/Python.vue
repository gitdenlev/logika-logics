<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import TypeIt from "typeit";
import Sidebar from "../components/Sidebar.vue";
import Burger from "../components/Burger.vue";
import "../assets/common-styles.css";

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
const range = "'Python Субота 12:30'!G3:G10";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

onMounted(async () => {
  try {
    const response = await axios.get(url);
    const sheetsData = response.data.values;

    // Оновлюємо дані учнів
    students.forEach((student, index) => {
      if (sheetsData[index] && sheetsData[index][0] !== undefined) {
        student.logics.value = sheetsData[index][0]; // Дані для учня
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false; // Завершуємо завантаження
  }

  new TypeIt("#course-title", {
    strings: "Курс Python",
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
        <img src="/python.png" alt="scratch" class="course-icon" width="60" />
      </div>
      <h1 id="course-title"></h1>
    </div>

    <!-- Спінер завантаження -->
    <div class="loading" v-if="loading">
      <img src="/halloween/skull.png" alt="logo" width="80" />
    </div>

    <!-- Таблиця -->
    <div class="halloween-container" v-else>
      <table class="logics-table">
        <thead>
          <tr>
            <th>Учень</th>
            <th>Кількість логіків</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students.flat()" :key="student.name">
            <td class="student-name">
              {{ student.name }}
            </td>
            <td class="logics">{{ student.logics.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
