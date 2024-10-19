<script setup>
import Layout from '../components/Layout.vue';
import { ref } from 'vue';
const students = [
  [
    { name: "Войко Мирон", logics: ref(0) },
    { name: "Заможський Юра", logics: ref(0) },
    { name: "Старун Денис", logics: ref(0) },
    { name: "Шевченко Єгор", logics: ref(0) },
    { name: "Шкода Анастасія", logics: ref(0) },
  ],
  [
    { name: "Божко Єлизавета", logics: ref(0) },
    { name: "Головатий Філіп", logics: ref(0) },
    { name: "Перекопський Олександр", logics: ref(0) },
    { name: "Сирота Кіра", logics: ref(0) },
    { name: "Снисарь Ярослав", logics: ref(0) },
    { name: "Халиулин Давид", logics: ref(0) },
    { name: "Берлін Денис", logics: ref(0) },
    { name: "Головкова Анастасія", logics: ref(0) },
    { name: "Жученко Євген", logics: ref(0) },
    { name: "Швед Дарія", logics: ref(0) },
  ],
];
</script>

<template>
  <Layout
    courseTitle="Курс Frontend"
    courseIcon="/frontend.png"
    :students="students"
    :ranges="['Frontend Вівторок 18:30!G3:G12', 'Frontend П\'ятниця 19:00!G3:G7']"
  />
</template>

