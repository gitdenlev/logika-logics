<script setup>
import Layout from "../components/Layout.vue";
import { ref } from "vue";
const students = [
  [
    { name: "Головатий Філіп", logics: ref(0) },
    { name: "Перекопський Олександр", logics: ref(0) },
    { name: "Сирота Кіра", logics: ref(0) },
    { name: "Снисарь Ярослав", logics: ref(0) },
    { name: "Халиулин Давид", logics: ref(0) },
    { name: "Берлін Денис", logics: ref(0) },
    { name: "Швед Дарія", logics: ref(0) },
    { name: "Пугачов Іван", logics: ref(0) },
  ],
];
students[0].sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <Layout
    courseTitle="Курс Frontend"
    courseIcon="/frontend.png"
    :students="students"
    :ranges="['Frontend Вівторок 18:30!G4:G11']"
  />
</template>
