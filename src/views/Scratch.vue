<script setup>
import Layout from "../components/Layout.vue";
import { ref } from "vue";
import "../assets/common-styles.css";
const students = [
  [
    { name: "Бєлаш Богдан", logics: ref(0) },
    { name: "Гуменюк Анна", logics: ref(0) },
    { name: "Жуплєв Тимофій", logics: ref(0) },
    { name: "Ібрагімов Тамерлан", logics: ref(0) },
    { name: "Карнаух Єлісей", logics: ref(0) },
    { name: "Кондрашов Захар", logics: ref(0) },
    { name: "Кондрашова Поліна", logics: ref(0) },
    { name: "Понамарьова Лана", logics: ref(0) },
  ],
];
students[0].sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <Layout
    courseTitle="Курс Scratch"
    courseIcon="/scratch.svg"
    :students="students"
    :ranges="['Scratch Неділя 10:00!G3:G13']"
  />
</template>
