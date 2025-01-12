import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import Scratch from "../views/Scratch.vue";
import Gamedesign from "../views/Gamedesign.vue";
import Webdesign from "../views/Webdesign.vue";
import Python from "../views/Python.vue";
import Frontend from "../views/Frontend.vue";
import Compsci from "../views/Compsci.vue";
import GraphicDesign from "../views/GraphicDesign.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/compsci",
      component: Compsci
    },
    {
      path: "/scratch",
      component: Scratch,
    },
    {
      path: "/gamedesign",
      component: Gamedesign,
    },
    {
      path: "/graphicdesign",
      component: GraphicDesign
    },
    {
      path: "/webdesign",
      component: Webdesign,
    },
    {
      path: "/python",
      component: Python,
    },
    {
      path: "/frontend",
      component: Frontend,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    }
  ],
});
