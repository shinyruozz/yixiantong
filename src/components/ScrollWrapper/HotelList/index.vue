<template>
  <div class="hotel-list">
    <hotel-sub v-for="item of hotelDatas" :key="item.id" :hotelData="item"></hotel-sub>
  </div>
</template>

<script>
import HotelSub from "./HotelSub.vue";
export default {
  name: "HotelList",
  props: {
    hotelDatas: {
      type: Array,
    },
  },
  components: {
    HotelSub,
  },
};
</script>

<style >
</style>