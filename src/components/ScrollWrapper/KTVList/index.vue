<template>
  <div class="ktv-list">
    <ktv-sub v-for="item of ktvDatas" :key="item.id" :ktvData="item"></ktv-sub>
  </div>
</template>

<script>
import KtvSub from "./KtvSub.vue";
export default {
  name: "KTVList",
  props: {
    ktvDatas: {
      type: Array,
    },
  },
  components: {
    KtvSub,
  },
};
</script>

<style lang='scss' scoped>
.ktv-list {
  background-color: #fff;
}
</style>