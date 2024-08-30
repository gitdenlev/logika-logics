<template>
  <div class="sidebar">
    <router-link to="/">
      <div class="logo-container">
        <img src="/logo.svg" alt="" width="40" />
      </div>
    </router-link>

    <ul class="sidebar-list">
      <li v-for="course in courses" :key="course.name">
        <div class="sidebar-item">
          <img :src="course.icon" alt="" class="course-icon" />
          <router-link :to="course.link" class="sidebar-link">
            {{ course.name }}
          </router-link>
        </div>
      </li>
      <li class="shop-item">
        <router-link to="/shop" class="sidebar-link shop-link">
          <img src="/shop.png" alt="Shop" class="shop-icon" />
          Магазин
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const courses = [
  {
    name: "Комп'ютерна грамотність",
    link: "/compsci",
    icon: "/compsci.png",
  },
  { name: "Візуальне програмування", link: "/scratch", icon: "/scratch.svg" },
  { name: "Геймдизайн", link: "/gamedesign", icon: "/gamedesign.png" },
  { name: "Веб-дизайн", link: "/webdesign", icon: "/webdesign.png" },
  {
    name: "Графічний дизайн",
    link: "/graphicdesign",
    icon: "/graphicdesign.png",
  },
  { name: "Python", link: "/python", icon: "/python.png" },
  { name: "Frontend", link: "/frontend", icon: "/frontend.png" },
];
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;
  background-color: #5e287c;
  padding: 20px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px dashed #ffffff;
}

.logo-container {
  margin-bottom: 1em;
}

h2 {
  color: #ffffff;
  font-size: 1.5em;
  margin-bottom: 1em;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.sidebar-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.course-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.sidebar-link {
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;
  flex-grow: 1;
}

.sidebar-link:hover {
  background-color: #7a3db8;
  transform: translateX(5px);
}

.shop-item {
  margin-top: auto;
  display: flex;
  align-items: center;
  padding-left: 10px; /* Make space between sidebar items and shop icon */
}

.shop-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.shop-link {
  display: flex;
  align-items: center;
}

.shop-link:hover {
  background-color: #9e3fd7;
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 10px;
    position: relative;
  }

  .sidebar-list {
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    width: 100%;
    justify-content: space-between;
  }

  .sidebar-item {
    margin-bottom: 0;
  }

  .shop-item {
    margin-left: auto;
  }
}
</style>
