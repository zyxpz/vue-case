<template>
  <div>
    <Header v-bind:page=page></Header>
    <button v-on:click="next">下一页</button>
    <button v-on:click="back">返回</button>
  </div>
</template>

<script>
import Header from '../component/header';

export default {
  data() {
    return {
      page: 3,
    };
  },
  components: {
    Header,
  },
  methods: {
    next() {
      this.$router.push('/page4');
    },
    back() {
      window.history.length > 1
      ? this.$router.go(-1)
      : this.$router.push('/');
    },
  },
};
</script>
