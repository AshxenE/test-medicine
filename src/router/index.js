import Vue from "vue";
import VueRouter from "vue-router";
import authPage from "@/views/authPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "authPage",
    component: authPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
