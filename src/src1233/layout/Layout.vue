<template>
  <!-- <h1>hello</h1> -->
  <div class="layout">
    <!-- menu -->
    <!-- <div class="menu"></div> -->
    <Menu />
    <!-- menu -->
    <!-- main -->
    <div class="main">
      <!-- top -->
      <Top />
      <!-- top -->
      <!-- content -->
      <div class="content">
        <!-- <h1 v-for="item in 100" :key="item">测试</h1> -->
        <router-view />
      </div>
      <!-- content -->
    </div>
    <!-- main -->
  </div>
</template>

<script>
export default {
  components: {
    Menu: () => import("./components/Menu.vue"),
    Top: () => import("./components/Top.vue"),
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  // main
  .main {
    flex: 1;
    background: #fff;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; // 切记切记切记：el-table超出整个网页内容 */

    // content
    .content {
      flex: 1;
      width: 96%;
      margin: auto;
      overflow-y: scroll;
    }
  }
}
</style>
