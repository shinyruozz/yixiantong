<template>
  <div class="container">
    <comment-header :title="title"></comment-header>
  </div>
</template>

<script>
import CommentHeader from "../components/Header/CommentHeader.vue";
export default {
  name: "Detail",
  components: {
    CommentHeader,
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