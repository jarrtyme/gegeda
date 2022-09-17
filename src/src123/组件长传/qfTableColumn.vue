<template>
  <span />
</template>

<script>
export default {
  props: ["prop", "label"],
  // 组件渲染完毕后触发
  // 相当于window.onload
  mounted() {
    // console.log(this); // 组件实例/对象
    // console.log(this.$parent); // 父组件实例/对象（就是qfTable）

    this.$parent.column.push(this);
  },
};
</script>

<style></style>
