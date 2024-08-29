<script setup>
const students = [
  { student: "Булах Кіра", logics: 163 },
  { student: "Виговський Матвій", logics: 64 },
  { student: "Гуржій Кирило", logics: 165 },
  { student: "Назаренко Ярослав", logics: 140 },
  { student: "Осадчий Марк", logics: 170 },
];

const students2 = [
  { student: "Бутук Ярослав", logics: 230 },
  { student: "Довбня Михайло", logics: 206 },
  { student: "Марченко Єгор", logics: 215 },
  { student: "Скрипников Кирило", logics: 245 },
  { student: "Чикаловський Станіслав", logics: 220 },
];
</script>

<template>
  <div class="container">
    <router-link to="/"
      ><img src="/arrow.svg" alt="arrow" width="40"
    /></router-link>
    <h2>Курс Геймдизайну</h2>
    <h2 class="table-title">Таблиця Логіків</h2>
    <h2 class="group-time">Субота 10:30</h2>
    <table class="logics-table">
      <thead>
        <tr>
          <th>Учень</th>
          <th>Кількість логіків</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students2" :key="student.lastName">
          <td class="student-name">{{ student.student }}</td>
          <td>{{ student.logics }}</td>
        </tr>
      </tbody>
    </table>
    <h2 style="margin-top: 10px" class="group-time">Неділя 11:00</h2>
    <table class="logics-table">
      <thead>
        <tr>
          <th>Учень</th>
          <th>Кількість логіків</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.lastName">
          <td class="student-name">{{ student.student }}</td>
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
</style>
