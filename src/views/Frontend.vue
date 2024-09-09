<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Sidebar from "../components/Sidebar.vue";
import Nav from "../components/Nav.vue";

const shopPopup = ref(false);

const coursesPopup = ref(false);

const ratingPopup = ref(false);

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
    console.log(sheetsData); // Додайте цей рядок для перевірки отриманих даних

    students[0].forEach((student, index) => {
      if (sheetsData[1][index] && sheetsData[1][index][0] !== undefined) {
        student.logics.value = sheetsData[1][index][0]; // Дані для першої групи
      }
    });

    students[1].forEach((student, index) => {
      if (sheetsData[0][index] && sheetsData[0][index][0] !== undefined) {
        student.logics.value = sheetsData[0][index][0]; // Дані для другої групи
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false; // Завершуємо завантаження
  }
});

const medalImages = [
  "/medal-gold.svg",
  "/medal-silver.svg",
  "/medal-bronze.svg",
];
</script>

<template>
  <div class="content">
    <Sidebar />
    <div class="header">
      <div class="course-info">
        <img
          src="/frontend.png"
          alt="frontend"
          class="course-icon"
          width="60"
        />
      </div>
      <h1>Курс Frontend</h1>
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
        <tr v-for="student in students.flat()" :key="student.name">
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
    <!-- <Nav /> -->
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  margin-left: 250px; /* Відступ для сайдбару */
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
  border-spacing: 5px;
  border-radius: 30px;
}

th,
td {
  padding: 15px;
  font-weight: bold;
  border-radius: 30px;
}

th {
  background-color: #3498db;
  color: #ffffff;
  font-size: 1.1rem;
}

td {
  background-color: #ffffff;
  color: #333;
  font-size: 1rem;
  border-radius: 30px;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Легке чергування рядків */
}

tbody tr:hover {
  background-color: #e0e0e0; /* Тло при наведенні */
}

.logics {
  text-align: center;
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

@media screen and (max-width: 768px) {
  .content {
    margin-left: 0px;
    width: 100%;
  }
}


@media screen and (min-width: 769px) {
  .content {
    margin-left: 275px;
  }
}

@media screen and (min-width: 1024px) {
  .content {
    margin-left: 300px;
  }
}

@media screen and (min-width: 1280px) {
  .content {
    margin-left: 270px;
  }
}



</style>
