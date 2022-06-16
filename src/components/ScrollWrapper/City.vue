<template>
  <scroll>
    <city-list :cityData="cityData"></city-list>
  </scroll>
</template>

<script>
import Scroll from "./Scroll.vue";
import cityData from "@/assets/data/city.js";
import CityList from "./CityList";
export default {
  name: "CityScrollWrapper",
  components: {
    Scroll,
    CityList,
  },
  data() {
    return {
      cityData,
    };
  },
};
</script>

<style>
</style>