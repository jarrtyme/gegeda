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
    path: "/dy",
    name: `dy`,
    component: dy,
  },
  {
    path: "/yy",
    name: `yy`,
    component: yy,
  },
  {
    path: "/my",
    name: `my`,
    component: my,
  },
  {
    path: "/zx",
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
