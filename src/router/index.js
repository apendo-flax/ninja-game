import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Game from "../views/Game.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
