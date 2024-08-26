import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import NotFound from '@/views/NotFound.vue';
import Scratch from "@/views/courses/Scratch.vue";
import Gamedesign from "@/views/courses/Gamedesign.vue";
import Webdesign from '@/views/courses/Webdesign.vue';
import Python from '@/views/courses/Python.vue'; 



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
      path: "/courses/scratch",
      name: "Scratch",
      component: Scratch,
    },
    {
      path: "/courses/gamedesign",
      name: "Gamedesign",
      component: Gamedesign,
    },
    {
      path: "/courses/webdesign",
      name: "Webdesign",
      component: Webdesign,
    },
    {
      path: "/courses/python",
      name: "Python",
      component: Python,
    },
  ],
});

export default router
