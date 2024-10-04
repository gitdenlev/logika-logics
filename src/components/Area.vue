<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const requestLink = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=2";

const text = ref("");


axios
  .get(requestLink, {
    headers: {
      "X-Api-Key": "YOUR_API_KEY",
    },
  })
  .then((response) => {
    text.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });
</script>

<template>
  <textarea v-model="text"></textarea>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 24px;
  resize: none;
}
</style>
