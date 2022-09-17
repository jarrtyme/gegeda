<template>
  <div class="qf-dialog" v-show="visible">
    <div class="box">
      <header>
        <h2>标题</h2>
        <span @click="$emit('update:visible', false)">x</span>
      </header>
      <hr />
      <main>
        <slot></slot>
      </main>
      <hr />
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
