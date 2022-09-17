<template>
  <fieldset>
    <legend>{{ title }}</legend>
    <slot></slot>
    <hr />
    <div class="footer" style="padding: 10px 0; text-align: right">
      <slot name="footer"></slot>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
