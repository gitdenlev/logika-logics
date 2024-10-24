<script setup>
import Layout from "../components/Layout.vue";
import { ref } from "vue";
import "../assets/common-styles.css";
const students = [
  [
    { name: "Барсук Ярослав", logics: ref(0) },
    { name: "Візіренко Юлія", logics: ref(0) },
    { name: "Козиряцький Марк", logics: ref(0) },
    { name: "Кравець Данієла", logics: ref(0) },
    { name: "Новіков Лев", logics: ref(0) },
    { name: "Осадчий Святослав", logics: ref(0) },
    { name: "Скрябіна Марія", logics: ref(0) },
    { name: "Суптеля Ярослав", logics: ref(0) },
  ],
];
</script>

<template>
  <Layout
    courseTitle="Курс Геймдизайн"
    courseIcon="/gamedesign.png"
    :students="students"
    :ranges="['Геймдизайн Неділя 14:00!G3:G10']"
  />
</template>
