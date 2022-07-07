<template>
  <div class="loading-wrap">
    <div class="img-wrap">
      <img src="@/assets/images/loading.gif" alt />
    </div>
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    text: {
      type: String,
      default: "正在加载...",
    },
  },
};
</script>

<style lang='scss' scoped>
.loading-wrap {
  height: 3rem;
  background-color: #fff;
  line-height: 3rem;
  .img-wrap {
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    text-align: center;
    font-size: 0.16rem;
    color: #999;
  }
}
</style>