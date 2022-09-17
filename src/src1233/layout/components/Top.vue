<template>
  <div class="top">
    <!-- left -->
    <div class="left">
      <div class="btn">
        <i class="el-icon-s-fold"></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- left -->
    <!-- right -->
    <div class="right">
      <span>神龙教主（超级管理员）</span>
      <i class="el-icon-switch-button"></i>
      <i class="el-icon-full-screen"></i>
    </div>
    <!-- right -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// top
.top {
  height: 50px;
  margin-bottom: 30px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  // left
  .left,
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background: blue; */

    .btn {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      &:hover {
        background: rgba(0, 0, 0, 0.025);
        cursor: pointer;
      }
    }
  }
  // right
  .right {
    justify-content: flex-end;
    /* background: green; */
    i {
      font-size: 20px;
      margin-right: 10px;
      &:last-child {
        margin-right: 50px;
      }
    }
  }
}
</style>
