<template>
  <div class="back-wrad">
    <span class="iconfont icon-header-arrow-left" @click="backClick"></span>
  </div>
</template>

<script>
export default {
  name: "BackWard",
  methods: {
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";

.back-wrad {
  position: absolute;
  left: 0px;
  @include vh-center;
  width: 0.5rem;
  height: $headerHeight;
  font-size: 0.18rem;
  margin-left: 0.05rem;
}
</style>