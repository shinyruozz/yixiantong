<template>
  <div class="city-list">
    <current-city></current-city>
    <city-sub v-for="city of cityData" :key="city.cityId" :cityInfo="city"></city-sub>
  </div>
</template>

<script>
import CurrentCity from "./CurrentCity.vue";
import CitySub from "./CitySub.vue";

export default {
  name: "CityList",
  components: {
    CitySub,
    CurrentCity,
  },
  props: {
    cityData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>