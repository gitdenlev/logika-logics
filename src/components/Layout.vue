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

// Створюємо URL для кожного діапазону
const urls = props.ranges.map(
  (range) =>
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
);

onMounted(async () => {
  try {
    const responses = await axios.all(urls.map((url) => axios.get(url)));
    const sheetsData = responses.map((response) => response.data.values);

    // Оновлюємо дані учнів для кожної групи
    sheetsData.forEach((data, groupIndex) => {
      if (props.students[groupIndex]) {
        // Перевіряємо, чи існує група
        data.forEach((row, studentIndex) => {
          // Перевіряємо, чи є дані в рядку та чи існує студент
          if (
            row[0] !== undefined &&
            props.students[groupIndex][studentIndex]
          ) {
            props.students[groupIndex][studentIndex].logics.value = row[0];
          } else {
            console.warn(
              `Student or data missing for group ${groupIndex}, student ${studentIndex}`
            );
          }
        });
      } else {
        console.warn(`Group ${groupIndex} is undefined`);
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
        <img
          :src="courseIcon"
          alt="course icon"
          class="course-icon"
          width="60"
        />
      </div>
      <h1 id="course-title"></h1>
    </div>

    <div class="loading" v-if="loading">
      <img src="/logo.svg" alt="loading" width="50" />
    </div>

    <div class="halloween-container" v-else>
      <div v-for="(group, index) in students" :key="index" class="group-table">
        <table class="logics-table">
          <thead>
            <tr>
              <th class="student-name-title">Учень</th>
              <th>Кількість логіків</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in group" :key="student.name">
              <td class="student-name">{{ student.name }}</td>
              <td class="logics">{{ student.logics.value }}</td>
            </tr>
          </tbody>
        </table>
        <div class="group-separator"></div>
      </div>
    </div>
  </div>
</template>
