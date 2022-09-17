//引入vue文件
import Vue from "vue";
import App from "./App.vue";

// 引入vx 默认用index文件
import store from "./store";

// 引入VueRouter
import VueRouter from "vue-router";
// 引入路由器 默认用index文件
import router from "./router";
//引入插件
import vueResource from "vue-resource";

// 引入ElementUI组件库
import ElementUI from "element-ui";
// 引入ElementUI全部样式
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

// 应用 ElementUI 插件
Vue.use(ElementUI);
// 应用 VueRouter 插件
Vue.use(VueRouter);
//使用插件
Vue.use(vueResource);

new Vue({
  router,
  store,
  render: (h) => h(App),
  // 安装全局事件总线，$bus就是当前应用的vm
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
