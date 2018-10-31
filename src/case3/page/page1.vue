<template>
  <div>
    <Header v-bind:page="page"></Header>
    <button v-on:click="next">下一页</button>
  </div>
</template>

<script>
import Header from '../component/header';

export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    Header,
  },
  methods: {
    next() {
      this.$router.push('/page2');
    },
  },
};
</script>
