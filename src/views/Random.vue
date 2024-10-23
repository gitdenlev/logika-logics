<script setup>
import Sidebar from "../components/Sidebar.vue";
import Burger from "../components/Burger.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import TypeIt from "typeit";

// Початковий текст та стан завантаження
const joke = ref("Тут повинна з'являтись смішнявка");
const fact = ref("Прокачай свій мозок");
const isLoadingFact = ref(false);
const isLoadingJoke = ref(false);

onMounted(async () => {
  new TypeIt("#page-title", {
    strings: "Зона випадковостей",
    speed: 100,
    loop: false,
    cursor: false,
  }).go();
});

const FACTS_API_KEY = "mhJRXH+Xgp7RDsJU6SSe8Q==4oF7MK9Rb1RWqRhx";
const API_LINK_FACTS = "https://api.api-ninjas.com/v1/facts"; // Додали API посилання для фактів
const API_LINK_JOKES = "https://api.api-ninjas.com/v1/jokes"; // Додали API посилання для жартів
const DEEPL_API_KEY = "ecda2158-af7d-4d3e-966c-c3878d43d690:fx"; // Ваш ключ до DeepL API
const DEEPL_API_URL = "https://api-free.deepl.com/v2/translate"; // URL для API DeepL

// Функція для перекладу тексту на українську мову через DeepL
const translateToUkrainian = async (text) => {
  try {
    const response = await axios.post(
      DEEPL_API_URL,
      new URLSearchParams({
        auth_key: DEEPL_API_KEY,
        text: text,
        target_lang: "UK", // Цільова мова українська
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const translated = response.data.translations[0].text;
    return translated;
  } catch (error) {
    console.error("Помилка при перекладі:", error);
    return "Помилка при перекладі.";
  }
};

// Функція для отримання факту
const getFact = async () => {
  isLoadingFact.value = true;

  try {
    // Отримуємо новий факт
    const response = await axios.get(API_LINK_FACTS, {
      headers: {
        "X-Api-Key": FACTS_API_KEY,
      },
    });

    const newFact = response.data[0].fact; // Отримуємо новий факт
    const translated = await translateToUkrainian(newFact); // Перекладаємо факт
    fact.value = translated; // Одразу відображаємо перекладений факт
  } catch (error) {
    fact.value = "Сталася помилка при завантаженні факту.";
  } finally {
    isLoadingFact.value = false;
  }
};

// Функція для отримання жарту
const getJoke = async () => {
  isLoadingJoke.value = true;

  try {
    // Отримуємо новий жарт
    const response = await axios.get(API_LINK_JOKES, {
      headers: {
        "X-Api-Key": FACTS_API_KEY,
      },
    });

    const newJoke = response.data[0].joke; // Отримуємо новий жарт
    joke.value = await translateToUkrainian(newJoke); // Перекладаємо жарт на українську
  } catch (error) {
    joke.value = "Сталася помилка при завантаженні жарту.";
  } finally {
    isLoadingJoke.value = false;
  }
};
</script>

<template>
  <div class="content">
    <Sidebar />
    <Burger />
    <div class="header">
      <div class="course-info animate__animated animate__bounceIn animate__delay-1s">
        <img src="/random.png" alt="random" class="course-icon" width="60" />
      </div>
      <h1 id="page-title"></h1>
    </div>

    <div class="info-and-sections">
      <!-- Секція 1: Цікаві факти -->
      <div class="section-card animate__animated animate__headShake">
        <div class="card-header">
          <!-- <img src="/facts-book.png" alt="facts" /> -->
          <img src="/halloween/magic-book.png" alt="magic-book" />
          <h2>Цікаві факти</h2>
        </div>
        <div class="text-content">
          <!-- Відображаємо перекладений факт -->
          <p class="translated-text">
            <i>{{ fact }}</i>
          </p>
        </div>
        <!-- Додаємо клас 'spin' під час завантаження факту -->
        <button @click="getFact" class="generate-btn" :disabled="isLoadingFact">
          <img
            :class="isLoadingFact ? 'spin' : ''"
            src="/halloween/monster.png"
            alt="rotate"
            width="60px"
          />
          {{ isLoadingFact ? "Завантаження..." : "Новий факт" }}
        </button>
      </div>

      <!-- Секція 2: Жарти -->
      <div class="section-card animate__animated animate__headShake">
        <div class="card-header">
          <!-- <img src="/comedy.png" alt="comedy" /> -->
          <img src="/halloween/vampire.png" alt="vampire" />
          <h2>Жарти</h2>
        </div>
        <div class="text-content">
          <!-- Відображаємо жарт -->
          <p class="translated-text">
            <i>{{ joke }}</i>
          </p>
        </div>
        <!-- Додаємо клас 'spin' під час завантаження жарту -->
        <button @click="getJoke" class="generate-btn" :disabled="isLoadingJoke">
          <img
            :class="isLoadingJoke ? 'spin' : ''"
            src="/halloween/monster.png"
            alt="rotate"
            width="30px"
          />
          {{ isLoadingJoke ? "Завантаження..." : "Новий жарт" }}
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Загальні стилі для основного контенту */
.content {
  display: flex;
  flex-direction: column;
  margin-left: 250px;
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
}

.info-and-sections {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
}

/* Карти для секцій (факти, жарти, поради) */
.section-card {
  border-radius: 12px;
  background: white;
  padding: 25px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px; /* Додамо відступи між картами */
}

.section-card:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  color: black;
}

.card-header h2 {
  font-size: 24px;
  font-weight: 600;
}

.card-header img {
  width: 60px;
  height: 60px;
}



.course-info {
  display: flex;
  flex-direction: column; /* Вертикальне вирівнювання */
  align-items: center; /* Центруємо по горизонталі */
}

.header {
  display: flex;
  align-items: center;
  gap: 30px;
  color: black;
}

.text-content p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}

.generate-btn {
  /* background-color: #91cfff; */
  /* Хеловін тема */
  background-color: #acb03f;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 12px 20px;
  /* cursor: pointer; */
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

/* .generate-btn:hover {
  background-color: #78b3e0;
} */

.generate-btn img {
  width: 30px;
}

.generate-btn:disabled {
  background-color: #b3d6f8;
  cursor: not-allowed;
}

.spin {
  transform: rotate(-360deg);
  transition: transform 0.5s linear;
}

/* Адаптивність для мобільних пристроїв */
@media screen and (max-width: 767px) {
  /* Основний контент */
  .content {
    margin-left: 0;
    padding: 10px;
  }

  /* Верстка секцій */
  .info-and-sections {
    flex-direction: column;
    margin-top: 20px;
  }

  /* Розмір карт для менших екранів */
  .section-card {
    width: 100%; /* Карти займають всю ширину */
    padding: 15px; /* Менші відступи всередині */
  }

  /* Зменшення розміру заголовків і тексту */
  .text-content h2 {
    font-size: 20px;
  }

  .text-content p {
    font-size: 16px;
  }

  /* Зменшення розміру кнопок */
  .generate-btn {
    padding: 10px 15px;
    font-size: 16px;
  }

  .generate-btn img {
    width: 20px;
    height: 20px;
  }
}

/* Адаптивність для дуже малих екранів, наприклад, мобільні телефони */
@media screen and (max-width: 480px) {
  .section-card {
    padding: 10px; /* Ще менші відступи всередині */
  }

  .text-content h2 {
    font-size: 18px;
  }

  .text-content p {
    font-size: 14px;
  }

  .generate-btn {
    font-size: 14px;
  }

  .generate-btn img {
    width: 18px;
    height: 18px;
  }
}
#page-title {
  font-weight: bold;
}

@media screen and (min-width: 769px) {
  .content {
    margin-left: 300px;
  }
  .section-card {
    width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .content {
    margin-left: 300px;
  }
}
#course-title {
  font-weight: bold;
}
</style>
