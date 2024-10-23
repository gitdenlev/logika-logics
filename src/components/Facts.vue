<script setup>
import { ref } from "vue";
import axios from "axios";
import { onMounted } from "vue";

const fact = ref("");
const isLoading = ref(false);

const FACTS_API_KEY = "mhJRXH+Xgp7RDsJU6SSe8Q==4oF7MK9Rb1RWqRhx";

const API_LINK = "https://api.api-ninjas.com/v1/facts";

const getFact = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(API_LINK, {
      headers: {
        "X-Api-Key": FACTS_API_KEY,
      },
    });
    fact.value = response.data[0].fact;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

// Fetch the first fact on mounted
onMounted(() => {
  getFact();
});
</script>

<template>
  <div class="facts-container">
    <div v-if="isLoading" class="loader"></div>
    <p v-else class="fact-text" key="fact">{{ fact }}</p>
    <button @click="getFact" class="new-fact-btn">
      <img src="/rotate-left.png" alt="rotate-left" width="40" />Новий факт
    </button>
  </div>
</template>

<style scoped>
.facts-container {
  background-color: #91cfff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 50px auto;
}

.fact-text {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
  animation: fadeIn 0.5s ease-in-out;
}

.new-fact-btn {
  background-color: #fff;
  color: #91cfff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.new-fact-btn:hover {
  background-color: #fff2f2;
}

.loader {
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #91cfff;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
