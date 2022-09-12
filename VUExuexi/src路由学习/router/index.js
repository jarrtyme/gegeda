import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import hahaha from "../pages/hahahahah.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/about",
    component: About,
    children: [
      // 通过children配置子级路由
      {
        path: "news", // 此处一定不要带斜杠，写成 /news
        component: About,
      },
      {
        path: "message",
        component: hahaha,
      },
    ],
  },
  {
    path: "/haha",
    component: hahaha,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
