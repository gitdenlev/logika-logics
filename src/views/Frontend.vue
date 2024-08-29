<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Дані про учнів
const students = [
  [
    { name: "Войко Мирон", logics: ref(0) },
    { name: "Заможський Юра", logics: ref(0) },
    { name: "Старун Денис", logics: ref(0) },
    { name: "Шевченко Єгор", logics: ref(0) },
    { name: "Шкода Анастасія", logics: ref(0) },
  ],
  [
    { name: "Божко Єлизавета", logics: ref(0) },
    { name: "Головатий Філіп", logics: ref(0) },
    { name: "Перекопський Олександр", logics: ref(0) },
    { name: "Сирота Кіра", logics: ref(0) },
    { name: "Снисарь Ярослав", logics: ref(0) },
    { name: "Халиулин Давид", logics: ref(0) },
  ],
];

const loading = ref(true); // Стан завантаження

// Ваш API ключ та ID таблиці
const apiKey = import.meta.env.VITE_API_KEY;
const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID;

const ranges = [
  "'Frontend Вівторок 18:30'!G3:G8",
  "'Frontend П'ятниця 15:00'!G3:G7",
];

const urls = [
  `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${ranges[0]}?key=${apiKey}`,
  `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${ranges[1]}?key=${apiKey}`,
];

onMounted(async () => {
  try {
    const responses = await axios.all(urls.map((url) => axios.get(url)));

    const sheetsData = responses.map((response) => response.data.values);

    // Прив'язуємо отримані дані до учнів у двох групах
    students[0].forEach((student, index) => {
      student.logics.value = sheetsData[1][index][0]; // Дані для першої групи
    });

    students[1].forEach((student, index) => {
      student.logics.value = sheetsData[0][index][0]; // Дані для другої групи
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
    <router-link to="/">
      <img src="/arrow.svg" alt="arrow" width="40" />
    </router-link>
    <h2>Курс Frontend</h2>
    <h2 class="table-title">Таблиця Логіків</h2>
    <h2 class="group-time">Вівторок 18:30</h2>
    <!-- Спінер завантаження -->
    <div v-if="loading" class="spinner"></div>
    <table v-else class="logics-table">
      <!-- Таблиця для першої групи -->
      <thead>
        <tr>
          <th>Учень</th>
          <th>Кількість логіків</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students[1]" :key="student.name">
          <td class="student-name">{{ student.name }}</td>
          <td>{{ student.logics }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Таблиця для другої групи -->
    <h2 style="margin-top: 10px" class="group-time">П'ятниця 15:00</h2>
    <div v-if="loading" class="spinner"></div>
    <table v-else class="logics-table">
      <thead>
        <tr>
          <th>Учень</th>
          <th>Кількість логіків</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students[0]" :key="student.name">
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
  border: 4px solid #f3f3f3;
  border-top: 4px solid #7a3db8;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
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
