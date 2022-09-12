<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="change" />
    </label>
    <span>
      <span>已完成{{ n }}</span> / 全部</span
    >
    <button class="btn btn-danger" @click="vshanchuall">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: `Myfooter`,
  props: [`todo`, `xuanzhongall`, `shanchuall`, `n`],
  methods: {
    vshanchuall() {
      this.shanchuall();
    },
  },
  computed: {
    change: {
      get() {
        console.log(this.n);
        console.log(this.todo.length);
        // console.log(this.n === this.todo.length);
        return this.n === this.todo.length;
      },
      set(a) {
        console.log(a);
        this.xuanzhongall(a);
      },
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
