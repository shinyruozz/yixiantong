<template>
  <div class="city">
    <router-link to="/city">
      <span class="city-name">{{cityInfo.cityName}}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "City",

  computed: {
    ...mapState(["cityInfo"]),
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";
.city {
  width: 0.6rem;
  height: $headerHeight;
  @include flex-row;
  align-items: center;
  font-size: 0.16rem;
  margin-left: 0.15rem;
  .city-name {
    font-weight: bold;
  }
  .iconfont {
    font-size: 0.14rem;
  }
}
</style>