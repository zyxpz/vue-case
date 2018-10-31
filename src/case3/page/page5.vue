<template>
  <div>
    <Header v-bind:page="page"></Header>
    <div>{{$route.params}}</div>
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
      page: 5,
    };
  },
};
</script>
