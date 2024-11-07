<script setup>
import Sidebar from "../components/Sidebar.vue";
import Burger from "../components/Burger.vue";
</script>
<template>
  <Burger />
  <div class="content">
    <Sidebar />
    <div class="main-section">
      <div class="info-and-facts">
        <div class="info-cards">
          <div class="card animate__animated animate__zoomInUp">
            <img src="/progress.png" alt="progress" />
            <div class="text-content">
              <h2>Відстежування свого прогресу</h2>
              <p>Зручно відстежуйте свої досягнення та результати</p>
            </div>
          </div>

          <div
            class="card animate__animated animate__zoomInUp animate__delay-1s"
          >
            <img src="/study.png" alt="study" />
            <div class="text-content">
              <h2>Навчання із задоволенням</h2>
              <p>Інтерактивні курси, що роблять навчання приємним</p>
            </div>
          </div>

          <div
            class="card animate__animated animate__zoomInUp animate__delay-2s"
          >
            <img src="/chat.png" alt="contact" />
            <div class="text-content">
              <h2>Залишайтеся на зв'язку</h2>
              <p>Миттєвий доступ до спілкування з вашим викладачем</p>
            </div>
          </div>

          <div
            class="card animate__animated animate__zoomInUp animate__delay-3s"
          >
            <img src="/interface.png" alt="interface" />
            <div class="text-content">
              <h2>Зручний інтерфейс</h2>
              <p>Інтуїтивний та простий у використанні інтерфейс</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  margin-left: 150px;
  padding: 20px;
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
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
    margin: 0 auto;
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
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 3px solid #5a94ce;
}

.card:first-child {
  transform: rotate(-5deg);
}

.card:nth-child(2) {
  transform: rotate(5deg);
  margin-top: 20px;
}

.card:nth-child(3) {
  transform: rotate(-5deg);
  margin-top: 20px;
}

.card:nth-child(4) {
  transform: rotate(5deg);
  margin-top: 20px;
}

.card img {
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
}

.text-content h2 {
  margin-bottom: 15px;
  color: #222;
  font-weight: 700;
  font-size: 24px;
}

.text-content p {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
}

.card:first-child::before {
  content: url("/orange-circle.png");
  position: absolute;
  top: -50px;
  left: 50%;
}


.card:nth-child(2)::before {
  content: url("/green-circle.png");
  position: absolute;
  top: -50px;
  left: 50%;
}


.card:first-child::before {
  content: url("/orange-circle.png");
  position: absolute;
  top: -50px;
  left: 50%;
}

.card:first-child::before {
  content: url("/orange-circle.png");
  position: absolute;
  top: -50px;
  left: 50%;
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
    width: 75px;
    height: 75px;
  }
}

@media screen and (min-width: 769px) {
  .content {
    margin: 0 auto;
  }
}

@media screen and (min-width: 1023px) {
  .content {
    margin-left: 250px;
  }
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
