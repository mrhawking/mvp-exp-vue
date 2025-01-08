import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CompletedPage from "../pages/CompletedPage.vue";
import CreatingPage from "../pages/CreatingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/create",
      name: "create",
      component: CreatingPage,
    },
    {
      path: "/completed",
      name: "completed",
      component: CompletedPage,
    },
  ],
});

export default router;
