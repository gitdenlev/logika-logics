<script setup>
import Sidebar from "../components/Sidebar.vue";
import Burger from "../components/Burger.vue";
</script>

<template>
  <Burger />
  <div class="content">
    <Sidebar />
    <div class="main-section">
      <div class="info-cards">
        <div class="card animate__animated animate__zoomInUp">
          <img src="/progress.png" alt="progress" />
          <div class="text-content">
            <h2>Відстежування свого прогресу</h2>
            <p>Зручно відстежуйте свої досягнення та результати</p>
          </div>
        </div>

        <div class="card animate__animated animate__zoomInUp animate__delay-1s">
          <img src="/study.png" alt="study" />
          <div class="text-content">
            <h2>Навчання із задоволенням</h2>
            <p>Інтерактивні курси, що роблять навчання приємним</p>
          </div>
        </div>

        <div class="card animate__animated animate__zoomInUp animate__delay-2s">
          <img src="/chat.png" alt="contact" />
          <div class="text-content">
            <h2>Залишайтеся на зв'язку</h2>
            <p>Миттєвий доступ до спілкування з вашим викладачем</p>
          </div>
        </div>

        <div class="card animate__animated animate__zoomInUp animate__delay-3s">
          <img src="/interface.png" alt="interface" />
          <div class="text-content">
            <h2>Зручний інтерфейс</h2>
            <p>Інтуїтивний дизайн для максимальної ефективності</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  margin-left: 250px;
  padding: 20px;
  min-height: 100vh;
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 2fr));
  gap: 30px;
  width: 100%;
  margin-left: 50px;
}

@media screen and (max-width: 667px) {
  .info-cards {
    display: flex;
    flex-direction: column;
  }

  .card {
    animation: zoomInDown 1s;
  }
}

@media screen and (min-width: 667px) and (max-width: 1024px) {
  .info-cards {
    display: flex;
    flex-direction: column;
  }
}

.card {
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 30px;
  padding: 30px;
  transition: transform 0.3s linear, box-shadow 0.3s linear;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.1);
}

.text-content h2 {
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
  font-size: 24px;
}

.text-content p {
  font-size: 16px;
  line-height: 1.5;
  color: black;
}

@media screen and (max-width: 768px) {
  .content {
    margin-left: 0;
    padding: 10px;
  }

  .main-section {
    padding: 10px;
  }

  .card {
    padding: 20px;
  }

  .card img {
    width: 60px;
    height: 60px;
  }
}
</style>
