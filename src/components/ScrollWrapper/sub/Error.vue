<template>
  <div class="error-wrap">
    <span class="iconfont icon-error"></span>
    <p class="text">{{textTip}}</p>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    textTip: {
      type: String,
      default: "网络走丢啦",
    },
  },
};
</script>

<style lang='scss' scoped>
.error-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: #999;

  .iconfont {
    font-size: 0.5rem;
  }
  .text {
    margin-top: 0.1rem;
    font-size: 0.16rem;
  }
}
</style>