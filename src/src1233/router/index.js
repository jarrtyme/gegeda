import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 语法：
  // {path,component,components,children,alias,redirect,name,meta,...}
  // 说明：
  // 1 一般组件/页面都放到views下面，但是后台首页/也就是两栏布局特殊 纵观历史铺垫大家都喜欢layout
  // 2 layout/Index.vue  layout/Layout.vue
  {
    path: "/",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "welcome",
        alias: "/",
        component: () => import("@/views/Welcome.vue"),
      },
      {
        path: "users/history",
        component: () => import("@/views/users/History.vue"),
      },
      {
        path: "users",
        component: () => import("@/views/users/Users.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
