<template>
  <div>
    <h1>这是about</h1>
    <router-link to="/about/news">/home/news</router-link><br />
    <router-link
      :to="{
        path: '/about/message',
        query: {
          id: this.id,
          title: this.title,
        },
      }"
      >/haha/message</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
  
export default {
  name: "About",
  data() {
    return {
      id: 123456,
      title: `哈哈哈`,
    };
  },
};
</script>

<style></style>
