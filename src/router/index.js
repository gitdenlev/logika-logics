import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/NotFound.vue';
import Scratch from "../views/Scratch.vue";
import Gamedesign from "../views/Gamedesign.vue";
import Webdesign from '../views/Webdesign.vue';
import Python from '../views/Python.vue'; 
import Frontend from "../views/Frontend.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/scratch",
      name: "Scratch",
      component: Scratch,
    },
    {
      path: "/gamedesign",
      name: "Gamedesign",
      component: Gamedesign,
    },
    {
      path: "/webdesign",
      name: "Webdesign",
      component: Webdesign,
    },
    {
      path: "/python",
      name: "Python",
      component: Python,
    },
    {
      path: "/frontend",
      name: "Frontend",
      component: Frontend,
    },
  ],
});

export default router
