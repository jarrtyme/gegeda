<template>
  <header class="qf-nav-bar">
    <div class="back" @click="leftClickFn">返回</div>
    <div class="title">{{ title }}</div>
    <div class="search" @click="rightClickFn">搜索</div>
  </header>
</template>

<script>
export default {
  props: {
    // title: String
    title: {
      type: String,
      required: true,
    },
  },

  methods: {
    leftClickFn() {
      // console.log("左侧返回逻辑");
      this.$emit("left-click");
    },
    rightClickFn() {
      // console.log("右侧搜索逻辑");
      this.$emit("right-click");
    },
  },
};
</script>

<style></style>
