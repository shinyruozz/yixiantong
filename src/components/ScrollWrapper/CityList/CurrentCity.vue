<template>
  <div class="current-city">
    <router-link to="/">
      当前城市：
      <span class="iconfont icon-positioning"></span>
      <span class="city-name">{{cityInfo.cityName}}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CurrentCity",
  computed: {
    ...mapState(["cityInfo"]),
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";

.router-link-active {
  display: block;
  width: 100%;
  height: 100%;
}
.current-city {
  @include flex-row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: 0.16rem;
  padding: 0.18rem 0.15rem;
  .iconfont {
    color: $defaultBgColor;
  }
}
</style>