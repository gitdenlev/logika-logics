<script setup>
import { ref } from "vue";

const showIcons = ref(false);

function toggleIcons() {
  showIcons.value = !showIcons.value;
}
</script>

<template>
  <div class="faq-container" @click="toggleIcons">
    <img src="/faq.svg" alt="FAQ" width="40" />
    <a href="https://t.me/denyalove" :class="{ disabled: !showIcons }">
      <img
        :class="{ visible: showIcons, unvisible: !showIcons }"
        src="/telegram.svg"
        alt="Telegram"
        width="40"
        class="telegram-icon"
      />
    </a>
  </div>
</template>

<style scoped>
.faq-container {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.telegram-icon {
  position: absolute;
  transition: all 0.4s ease;
  opacity: 0;
  left: 10px;
  width: 40px;
  height: 40px;
}

.telegram-icon.visible {
  transform: translateY(-60px);
  opacity: 1;
}

.telegram-icon.unvisible {
  transform: translate(0);
  opacity: 0;
}

a {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 50px;
  pointer-events: none; /* Вимкнення кліків на посилання, поки іконка прихована */
  transition: pointer-events 0.4s ease; /* Затримка для синхронізації з анімацією */
}

a.disabled {
  pointer-events: none; /* Вимикає кліки, коли іконка прихована */
}

a:not(.disabled) {
  pointer-events: auto; /* Вмикає кліки, коли іконка видима */
}

@media screen and (max-width: 763px) {
  .faq-container {
    margin: 10px;
  }
}

</style>
