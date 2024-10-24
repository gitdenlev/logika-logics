<script setup>
import Layout from "../components/Layout.vue";
import { ref } from "vue";
import "../assets/common-styles.css";
const students = [
  [
    { name: "Білич Андрій", logics: ref(0) },
    { name: "Глушко Артем", logics: ref(0) },
    { name: "Головенко Василь", logics: ref(0) },
    { name: "Кисельов Артем", logics: ref(0) },
    { name: "Леміш Аліна", logics: ref(0) },
    { name: "Лозова Олександра", logics: ref(0) },
    { name: "Хоменко Матвій", logics: ref(0) },
    { name: "Шматов Богдан", logics: ref(0) },
  ],
];
</script>

<template>
  <Layout
    courseTitle="Курс Python"
    courseIcon="/python.png"
    :students="students"
    :ranges="['Python Субота 12:30!G3:G10']"
  />
</template>
