<template>
  <div>
    <router-link :to="{ name: `dy`, query: { id: 22 } }">dy</router-link><br />
    <router-link :to="{ name: `my` }">my</router-link><br />
    <router-link :to="{ name: `yy` }">yy</router-link><br />
    <router-link :to="{ name: `zx` }">zx</router-link><br />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss"></style>
