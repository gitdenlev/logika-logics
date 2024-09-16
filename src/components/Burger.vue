<template>
  <div class="burger-menu animate__animated animate__backInLeft">
    <ul>
      <li><img src="/compsci.png" alt="Computer Science" /></li>
      <li><img src="/scratch.svg" alt="Scratch Programming" /></li>
      <li><img src="/gamedesign.png" alt="Game Design" /></li>
      <li><img src="/webdesign.png" alt="Web Design" /></li>
      <li><img src="/graphicdesign.png" alt="Graphic Design" /></li>
      <li><img src="/python.png" alt="Python Programming" /></li>
      <li><img src="/frontend.png" alt="Frontend Development" /></li>
    </ul>
  </div>
</template>

<style scoped>
.burger-menu {
  position: fixed;
  top: 20%;
  left: 0;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1), /* верхній слабкий шар */
              0px 15px 40px rgba(0, 0, 0, 0.2); /* нижній глибший шар */
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
}

li {
  cursor: pointer;
}

img {
  max-width: 40px;
  height: 40px;
}

@media screen and (min-width: 769px) {
  .burger-menu {
    display: none;
  }
}


</style>
