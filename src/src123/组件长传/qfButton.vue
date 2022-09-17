<template>
  <button
    type="button"
    :class="['qf-button', 'qf-button--' + type, round ? 'is-round' : '']"
    @click="$emit('click')"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
    // title: {
    //   type: String,
    //   required: true,
    // },
    round: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
