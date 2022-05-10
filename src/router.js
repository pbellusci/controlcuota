import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Tarjetas from "./pages/setup/Tarjetas.vue";
import Categorias from "./pages/setup/Categorias.vue";
import Setup from "./pages/Setup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    // UNCOMMENT AFTER TESTING component: Home,
    component: Home,
  },
  {
    path: "/setup",
    name: "Setup",
    component: Setup,
  },  
  {
    path: "/setup/tarjetas",
    name: "Setup  Tarjetas",
    component: Tarjetas,
  },
  {
    path: "/setup/categorias",
    name: "Setup  Categorias",
    component: Categorias,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;