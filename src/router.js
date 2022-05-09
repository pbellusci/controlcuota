import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Tarjetas from "./pages/setup/Tarjetas.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    // UNCOMMENT AFTER TESTING component: Home,
    component: Home,
  },
  {
    path: "/setup/tarjetas",
    name: "Setup  Tarjetas",
    component: Tarjetas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;