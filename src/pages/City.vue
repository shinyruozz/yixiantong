<template>
  <div class="container">
    <comment-header :title="title"></comment-header>
    <city-scroll></city-scroll>
  </div>
</template>

<script>
import CommentHeader from "../components/Header/CommentHeader.vue";
import CityScroll from "../components/ScrollWrapper/City.vue";
export default {
  name: "City",
  components: {
    CommentHeader,
    CityScroll,
  },
  data() {
    return {
      title: "城市选择",
    };
  },
};
</script>

<style>
</style>