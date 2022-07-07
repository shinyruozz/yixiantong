<template>
  <div class="tab-wrap">
    <div class="tab">
      <tab-sub v-for="(item) of tabDatas" :key="item.id" :data="item"></tab-sub>
    </div>
  </div>
</template>

<script>
import TabSub from "./TabSub.vue";
export default {
  name: "Tab",
  props: {
    tabDatas: {
      type: Array,
    },
  },
  components: {
    TabSub,
  },
};
</script>

<style lang='scss' scoped>
.tab-wrap {
  width: 100%;
  height: 0.44rem;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
.tab {
  overflow-x: scroll;
  display: flex;
  box-sizing: content-box;
  padding-bottom: 0.1rem;
  height: 0.43rem;
  background-color: #fff;
}
</style>