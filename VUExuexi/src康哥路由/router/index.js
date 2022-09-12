import VueRouter from "vue-router";
import dy from "../pages/dy.vue";
import yy from "../pages/yy.vue";
import my from "../pages/my.vue";
import zx from "../pages/zx.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: `dy`,
    component: dy,
  },
  {
    path: "/",
    name: `yy`,
    component: yy,
  },
  {
    path: "/",
    name: `my`,
    component: my,
  },
  {
    path: "/",
    name: `zx`,
    component: zx,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
