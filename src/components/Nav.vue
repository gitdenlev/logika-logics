<script setup>
import { ref } from "vue";
import { courses, shopItems, ratingItems } from "../data.js";

const coursesPopup = ref(false);
const shopPopup = ref(false);
const ratingPopup = ref(false);
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li @click="coursesPopup = !coursesPopup" class="nav-item">
        <img src="/courses.png" alt="courses" width="40px" />
        <h3>Курси</h3>
        <div v-if="coursesPopup" class="courses-menu">
          <ul class="courses-list">
            <li v-for="course in courses" :key="course.name">
              <img :src="course.img" :alt="course.name" width="30px" />
              <p>{{ course.name }}</p>
            </li>
          </ul>
        </div>
      </li>

      <li @click="shopPopup = !shopPopup" class="nav-item">
        <img src="/shop.png" alt="shop" width="40px" />
        <h3>Магазин</h3>
        <div v-if="shopPopup" class="shop-menu">
          <ul class="shop-list">
            <li v-for="item in shopItems" :key="item.name">
              <img :src="item.img" :alt="item.name" width="30px" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </li>

      <li @click="ratingPopup = !ratingPopup" class="nav-item">
        <img src="/top.png" alt="rating" width="40px" />
        <h3>Рейтинг</h3>
        <div v-if="ratingPopup" class="rating-menu">
          <ul class="rating-list">
            <li v-for="rating in ratingItems" :key="rating.name">
              <img :src="rating.img" :alt="rating.name" width="30px" />
              <p>{{ rating.name }}</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .nav {
    display: none;
    opacity: 0;
    overflow: hidden;
  }
}

@media screen and (max-width: 768px) {
  .nav {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #5f287d;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    box-shadow: 30px 10px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    color: white;
    border-top: 3px solid rgba(255, 255, 255, 0.2);
  }

  .nav .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .nav .nav-list .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  .courses-menu,
  .shop-menu {
    position: absolute;
    bottom: 60px;
    left: 0;
    padding: 10px;
    background-color: #5e287c;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
    transition: opacity 0.3s linear, transform 0.3s ease;
    width: 300px;
    border-radius: 5px;
  }

  .courses-menu {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 20px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .courses-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    color: #f1f1f1;
  }

  .courses-list li {
    padding: 5px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .courses-list li:hover {
    background-color: #f1f1f1;
    color: #5e287c;
  }

  .shop-menu {
    max-height: 300px;
    overflow-y: auto;
  }

  .shop-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    color: #f1f1f1;
  }

  .shop-list li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 135px;
  }

  .shop-list img {
    margin-right: 10px;
  }
}
</style>
