<template>
  <div class="no-data-tip">
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "NoDataTip",
  props: {
    text: {
      type: String,
      default: "--没有相关数据--",
    },
  },
};
</script>

<style lang='scss' scoped>
.no-data-tip {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  .text {
    font-size: 0.16rem;
    color: #999;
  }
}
</style>