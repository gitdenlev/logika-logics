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
    <img
      :class="{ visible: showIcons, unvisible: !showIcons }"
      src="/telegram.svg"
      alt="Telegram"
      width="40"
      class="telegram-icon"
    />
    <img
      :class="{ visible: showIcons, unvisible: !showIcons }"
      src="/call.svg"
      alt="Phone"
      width="40"
      class="phone-icon"
    />
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
}

.telegram-icon,
.phone-icon {
  position: absolute;
  transition: all 0.4s ease;
  opacity: 0;
}

.telegram-icon.visible {
  transform: translateX(-60px);
  opacity: 1;
}

.phone-icon.visible {
  transform: translateY(-60px);
  opacity: 1;
}

.telegram-icon.unvisible {
  transform: translateY(-0px);
  opacity: 0;
}

.phone-icon.unvisible {
  transform: translateY(-0px);
  opacity: 0;
}
</style>
