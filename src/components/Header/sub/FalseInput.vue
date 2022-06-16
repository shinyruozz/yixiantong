<template>
  <div class="false-input">
    <router-link to="/search">
      <div class="input">
        <span class="iconfont icon-header-search"></span>
        <p class="placeholder">{{placeholder}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FalseInput",
  props: {
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";

.false-input {
  flex: 1;
  height: $headerHeight;
  padding: 0.05rem 0.1rem 0.05rem 0;

  .input {
    @include vh-center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 0.05rem;
    color: #999;
    font-size: 0.14rem;
    .placeholder {
      margin-left: 0.1rem;
    }
  }
}
</style>