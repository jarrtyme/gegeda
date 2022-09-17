import Vue from "vue";
import App from "./App.vue";

// 引入vx 默认用index文件
import store from "./store";

// 引入VueRouter
import VueRouter from "vue-router";
// 引入路由器 默认用index文件
import router from "./router";

// 引入ElementUI组件库
import ElementUI from "element-ui";
// 引入ElementUI全部样式
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

// 使用ElementUI
Vue.use(ElementUI);
// 应用插件
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
