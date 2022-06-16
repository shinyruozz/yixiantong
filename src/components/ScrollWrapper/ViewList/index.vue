<template>
  <div class="view-list">
    <view-sub v-for="item of viewDatas" :key="item.id" :viewData="item"></view-sub>
  </div>
</template>

<script>
import ViewSub from "./viewSub.vue";
export default {
  name: "ViewList",
  props: {
    viewDatas: {
      type: Array,
    },
  },
  components: {
    ViewSub,
  },
};
</script>

<style lang='scss' scoped>
.view-list {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>