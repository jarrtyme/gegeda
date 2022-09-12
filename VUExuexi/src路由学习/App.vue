<template>
  <div>
    <div>
      <router-link to="/about">about</router-link><br />
      <router-link to="/home">home</router-link><br />
      <router-link to="/haha">hahahaasd iaiii </router-link>
    </div>

    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss"></style>
