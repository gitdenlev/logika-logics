<script setup>
import Layout from "../components/Layout.vue";
import { ref } from "vue";
import '../assets/common-styles.css';
const students = [
  [
    { name: "Данильченко Кирило", logics: ref(0) },
    { name: "Леміш Аліна", logics: ref(0) },
    { name: "Мирошниченко Андрій", logics: ref(0) },
    { name: "Семенов Артур", logics: ref(0) },
    { name: "Хом'як Нікіта", logics: ref(0) },
  ],
  [
    { name: "Березень Олександра", logics: ref(0) },
    { name: "Дупак Володимир", logics: ref(0) },
    { name: "Кірков Євген", logics: ref(0) },
    { name: "Оленів Микита", logics: ref(0) },
    { name: "Онищенко Володимир", logics: ref(0) },
    { name: "Пода Ілля", logics: ref(0) },
    { name: "Слабко Роман", logics: ref(0) },
  ],
];
</script>

<template>
  <Layout
    courseTitle="Курс Вебдизайн"
    courseIcon="/webdesign.png"
    :students="students"
    :ranges="['Вебдизайн Субота 17:00!G3:G9', 'Вебдизайн Неділя 15:30!G3:G7']"
  />
</template>
