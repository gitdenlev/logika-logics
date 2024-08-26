<script setup>
import { RouterLink } from "vue-router";
const students = [
  { student: "Березань Олександра", logics: 335 },
  { student: "Дупак Владимир", logics: 315 },
  { student: "Кірков Євген", logics: 319 },
  { student: "Оленів Микита", logics: 330 },
  { student: "Онищенко Володимир", logics: 310 },
  { student: "Пода Ілля", logics: 310 },
  { student: "Слабко Роман", logics: 310 },
];
const students2 = [
  { student: "Данильченко Кіріл", logics: 335 },
  { student: "Леміш Аліна", logics: 315 },
  { student: "Семенов Артур", logics: 319 },
  { student: "Хом'як Нікіта", logics: 330 },
  { student: "Шляховий Іван", logics: 310 },
];
const students3 = [
  { student: "Баранец Денис", logics: 335 },
  { student: "Костов Михаил", logics: 315 },
  { student: "Мельник Микола", logics: 319 },
  { student: "Нодь Валентин", logics: 330 },
];
</script>

<template>
  <div class="container">
    <RouterLink to="/"
      ><img src="/arrow.svg" alt="arrow" width="40"
    /></RouterLink>
    <h2>Курс Вебдизайну</h2>
    

    <h2 class="group-time">П'ятниця 17:00</h2>
    <table class="logics-table">
      <thead>
        <tr>
          <th>Учень</th>
          <th>Кількість логіків</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students3" :key="student.lastName">
          <td class="student-name">{{ student.student }}</td>
          <td>{{ student.logics }}</td>
        </tr>
      </tbody>
    </table>

    <h2 class="group-time">Субота 17:00</h2>
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
    <h2 class="group-time">Неділя 15:30</h2>
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
</style>
