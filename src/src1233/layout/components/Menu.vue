<template>
  <div class="menu">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo qf-menu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isHide"
      background-color="#2d3a4b"
      text-color="#fff"
    >
      <!-- 内容 -->
      <template v-for="(oneItem, oneI) in menuData">
        <el-submenu :key="oneI" :index="String(oneI)">
          <template slot="title">
            <i class="iconfont icon-caidan"></i>
            <span slot="title">{{ oneItem.name }}</span>
          </template>
          <!-- 二级 -->
          <template v-for="(twoItem, twoI) in oneItem.children">
            <el-menu-item
              :key="twoI"
              :index="oneI + '-' + twoI"
              @click="$router.push(twoItem.path)"
            >
              <i class="iconfont icon-shezhi"></i>
              {{ twoItem.name }}
            </el-menu-item>
          </template>
          <!-- 二级 -->
        </el-submenu>
      </template>
      <!-- 内容 -->
    </el-menu>
  </div>
</template>

<script>
import menuData from "./menuData.js";
export default {
  data() {
    return {
      isHide: false,

      // menuData: menuData,
      menuData,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
// menu
.menu {
  width: 200px;
  height: 100%;
  background: #2d3a4b;

  .el-menu {
    border: none;

    .iconfont {
      color: #909399;
      font-size: 18px;
      font-weight: 700;
      margin-right: 5px;
    }
  }
}
</style>
