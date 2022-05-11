import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Tarjetas from "./pages/setup/Tarjetas.vue";
import Categorias from "./pages/setup/Categorias.vue";
import Setup from "./pages/Setup.vue";
import SignUp from "./pages/SignUp.vue";
import SignIn from "./pages/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    // UNCOMMENT AFTER TESTING component: Home,
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/setup",
    name: "Setup",
    component: Setup,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/setup/tarjetas",
    name: "Setup  Tarjetas",
    component: Tarjetas,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/setup/categorias",
    name: "Setup  Categorias",
    component: Categorias,
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;