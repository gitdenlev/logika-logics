<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";

const isOpen = ref(false);
const topStudents = [
  { name: "Дзюндзя Денис", logics: 335, trophei: "/gold-trophei.svg" },
  { name: "Михайлов Іван", logics: 330, trophei: "/silver-trophei.svg" },
  { name: "Мельчевський Єгор", logics: 319, trophei: "/bronze-trophei.svg" },
];

const shopItems = [
  { item: "Браслет - 15 логіків", img: "/shop/bracelet.png" },
  { item: "Стікери - 25 логіків", img: "/shop/stickers.png" },
  { item: "Ручка - 25 логіків", img: "/shop/pen.png" },
  { item: "Олівець - 25 логіків", img: "/shop/pencil.png" },
  { item: "Значок - 30 логіків", img: "/shop/pin.png" },
  { item: "Попсокет - 50 логіків", img: "/shop/popsocket.png" },
  { item: "Шкарпетки - 100 логіків", img: "/shop/sock.png" },
  { item: "Пляшка - 150 логіків", img: "/shop/bottle.png" },
  { item: "Килимок для мишки - 180 логіків", img: "/shop/carpet.png" },
  { item: "Бананка - 220 логіків", img: "/shop/fanny-pack.png" },
  { item: "Футболка - 250 логіків", img: "/shop/t-shirt.png" },
  { item: "Парасолька - 250 логіків", img: "/shop/umbrella.png" },
  { item: "Навушники - 300 логіків", img: "/shop/headphones.png" },
  { item: "Донат на ЗСУ - 1 логік = 1,5 грн", img: "/shop/ukraine.png" },
  {
    item: "Знижка 30% на перший місяць навчання на новому курсі - 300 логіків",
    img: "/shop/sale.png",
  },
];
</script>

<template>
  <Sidebar />
  <div class="shop-popup">
    <div class="shop-popup-content">
      <div class="shop">
        <img src="/shop.png" alt="logo" width="25" />
      </div>
      <h2>Магазин</h2>
    </div>
    <ul class="shop-popup-list">
      <li v-for="item in shopItems" :key="item.item">
        <img :src="item.img" :alt="item.item" width="40" />
        <h2>{{ item.item }}</h2>
      </li>
    </ul>
  </div>

  <div class="top-popup">
    <div class="top-popup-content">
      <div class="top">
        <img src="/top.png" alt="top" width="30" />
      </div>
      <h2>Рейтинг</h2>
    </div>

    <ul>
      <li v-for="student in topStudents" :key="student.name">
        <div class="statistics">
          <div class="statisctics-text">
            <img :src="student.trophei" alt="trophei" width="40" />
            <h2>{{ student.name }}</h2>
          </div>
          <p>{{ student.logics }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.statisctics-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.statistics {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.statistics p {
  margin-left: 30px;
  font-size: 20px;
  font-weight: bold;
}

.stories {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 50%,
    rgba(131, 58, 180, 1) 100%
  );
  margin-bottom: 10px;
}

.top,
.shop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(4, 114, 255, 1) 0%,
    rgba(252, 176, 69, 1) 50%,
    rgba(131, 58, 180, 1) 100%
  );
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Додана тінь */
}

.top-popup,
.shop-popup {
  position: absolute;
  top: 10px;
  right: 0;
  padding: 10px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2); /* Додана тінь */
  border: none; /* Прибрані рамки */
  background-color: rgba(94, 40, 124, 0.95); /* Темний напівпрозорий фон */
  color: #f1f1f1;
  border-radius: 5px;
}

.shop-popup {
  margin-left: 100px;
}

.top-popup ul,
.shop-popup-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #f1f1f1;
}

.shop-popup {
  left: 15%; /* Вирівнювання магазину */
  width: 50%;
}

.shop-popup-content,
.top-popup-content {
  display: flex;
  align-items: center;
  gap: 5px;
}

.top-popup li,
.shop-popup li {
  display: flex;
  align-items: center;
  padding: 10px; /* Збільшений padding для кращого вигляду */
  border-radius: 5px;
}

.shop-popup li {
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); /* Легка прозорість для відокремлення елементів */
}

.top-popup h2,
.shop-popup h2 {
  margin-left: 10px;
  color: #ffffff; /* Білий текст */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.top-popup {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 400px;
}

/* Адаптивна верстка для планшетів */
@media (max-width: 1280px) {
  .shop-popup {
    left: 20%;
    width: 70%;
  }

  .top-popup {
    display: none;
    opacity: 0;
    overflow: hidden;
  }
}

@media (max-width: 975px) {
  .shop-popup {
    left: 25%;
    width: 60%;
  }
}

@media (max-width: 758px) {
  .shop-popup {
    left: 30%;
    width: 50%;
  }
}
</style>
