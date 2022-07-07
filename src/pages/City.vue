<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <city-scroll></city-scroll>
  </div>
</template>

<script>
import CommonHeader from "../components/Header/CommontHeader.vue";
import CityScroll from "../components/ScrollWrapper/City.vue";
export default {
  name: "City",
  components: {
    CommonHeader,
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