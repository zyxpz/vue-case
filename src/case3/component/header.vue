<template>
  <div class="page">我是第{{page}}页</div>
</template>

<script>
export default {
  props: ['page'],
};
</script>

<style lang="less">
  .page {
    text-align: center;
    color: blue;
  }
</style>
