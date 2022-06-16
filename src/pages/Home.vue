<template>
  <div class="container">
    <home-header></home-header>
    <home-scroll></home-scroll>
  </div>
</template>

<script>
import HomeHeader from "../components/Header/HomeHeader.vue";
import HomeScroll from "../components/ScrollWrapper/Home.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeScroll,
  },
};
</script>

<style>
</style>