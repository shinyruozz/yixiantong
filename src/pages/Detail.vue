<template>
  <div class="container">
    <comment-header :title="title"></comment-header>

    <detail-scroll></detail-scroll>
  </div>
</template>

<script>
import CommentHeader from "../components/Header/CommentHeader.vue";
import DetailScroll from "../components/ScrollWrapper/Detail.vue";

export default {
  name: "Detail",
  components: {
    CommentHeader,
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