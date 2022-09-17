<template>
  <div class="qf-page">
    <span @click="$emit('change-page', num)" v-for="num in totalPage">{{
      num
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    pagesize: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      totalPage: 0,
    };
  },
  watch: {
    // total(newdata, olddata) {}
    total: {
      handler(newdata, olddata) {
        // 4 2  2
        // 5 2  3
        this.totalPage = Math.ceil(this.total / this.pagesize);
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
