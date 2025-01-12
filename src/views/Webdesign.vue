<script setup>
import Layout from "../components/Layout.vue";
import { ref } from "vue";
import "../assets/common-styles.css";
const students = [
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

students[0].sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <Layout
    courseTitle="Курс Вебдизайн"
    courseIcon="/webdesign.png"
    :students="students"
    :ranges="['Вебдизайн Субота 10:30!G3:G14']"
  />
</template>
