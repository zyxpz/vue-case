<template>
  <div>
    <Header v-bind:page="page"></Header>
    <button v-on:click="back">返回</button>
    <button v-on:click="home">首页</button>
  </div>
</template>

<script>
import Header from '../component/header';

export default {
  components: {
    Header,
  },
  data() {
    return {
      page: 4,
    };
  },
  methods: {
    home() {
      this.$router.push('/');
    },
    back() {
      window.history.length > 1
      ? this.$router.go(-1)
      : this.$router.push('/');
    },
  },
};
</script>
