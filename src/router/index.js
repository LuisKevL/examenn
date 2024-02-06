import VueRouter from "vue-router";
import Vue from "vue";
import Inicio from "../components/Inicio.vue";
import Error404 from "../views/ErrorPages/Error404.vue";
import Layout from "@/components/Layout.vue";
import LandingPage from "../components/LandingPage.vue";
import Formulario from "../components/Formulario.vue";
import Paginacion from "../components/Paginacion.vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/inicio",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
  },
  {
    path: "*",
    component: Error404,
  },
  {
    path: "/formulario",
    component: Formulario,
  },
  {
    path: "/paginacion",
    component: Paginacion,
  },
  {
    path: "/navbar",
    component: Navbar,
  },
  {
    path: "/sidebar",
    component: Sidebar,
  },
  {
    path: '/landing',
    component: LandingPage
  }
];

const router = new VueRouter({ routes });
export default router;
