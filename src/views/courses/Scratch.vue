<script setup>
const students = [
  { student: "Дзюндзя Денис", logics: 335 },
  { student: "Кулеба Данил", logics: 315 },
  { student: "Мельчевський Єгор", logics: 319 },
  { student: "Михайлов Іван", logics: 330 },
  { student: "Панасенко Олеся", logics: 310 },
  { student: "Ткач Кіра", logics: 313 },
];
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterLink to="/"
      ><img src="/arrow.svg" alt="arrow" width="40"
    /></RouterLink>
    <h2>Курс Візуального програмування</h2>
    <h2 class="table-title">Таблиця Логіків</h2>
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

.course-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.course-link {
  text-decoration: none;
  color: #ffffff;
  background-color: #7a3db8;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
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
}

tbody tr:nth-child(even) {
  background-color: #ede7ff;
}

tbody tr:hover {
  background-color: #d9c9ff;
}
</style>
