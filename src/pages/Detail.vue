<template>
  <div class="container">
    <common-header :title="title"></common-header>

    <detail-scroll></detail-scroll>
  </div>
</template>

<script>
import CommonHeader from "../components/Header/CommontHeader.vue";
import DetailScroll from "../components/ScrollWrapper/Detail.vue";

export default {
  name: "Detail",
  components: {
    CommonHeader,
    DetailScroll,
  },
  data() {
    return {
      title: "详情信息",
    };
  },
};
</script>

<style>
</style>