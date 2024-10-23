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
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`,
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
