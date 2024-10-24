<script setup>
import Layout from "../components/Layout.vue";
import { ref } from "vue";
import "../assets/common-styles.css";
import { sheets } from "googleapis/build/src/apis/sheets";
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
  [
    { name: "Бобух Вероніка", logics: ref(0) },
    { name: "Бутук Ярослав", logics: ref(0) },
    { name: "Візіренко Юлія", logics: ref(0) },
    { name: "Дейніченко Георгій", logics: ref(0) },
    { name: "Матвиенко Данило", logics: ref(0) },
    { name: "Моргуль Святослав", logics: ref(0) },
    { name: "Мульський Ростислав", logics: ref(0) },
    { name: "Пилипенко Арсеній", logics: ref(0) },
    { name: "Русманенко Егор", logics: ref(0) },
    { name: "Синєокий Данііл", logics: ref(0) },
    { name: "Сокур Кирило", logics: ref(0) },
    { name: "Чикаловський Станіслав", logics: ref(0) },
  ],
];

const ranges = [
  "'Вебдизайн Субота 17:00'!G3:G9",
  "'Вебдизайн Неділя 15:30'!G3:G7",
  "'Вебдизайн Субота 10:30'!G3:G14",
];
</script>

<template>
  <Layout
    courseTitle="Курс Вебдизайн"
    courseIcon="/webdesign.png"
    :students="students"
    :ranges="ranges"
  />
</template>
