<template>
  <div class="hotel-detail">
    <detail-name :name="detailData.name"></detail-name>
    <detail-stars :score="detailData.score"></detail-stars>
    <detail-position :address="detailData.address"></detail-position>
    <detail-price :price="detailData.default_price"></detail-price>

    <detail-service :service="detailData.service"></detail-service>
  </div>
</template>

<script>
import DetailName from "./sub/Name.vue";
import DetailStars from "./sub/Stars.vue";
import DetailPosition from "./sub/Position.vue";
import DetailPrice from "./sub/Price.vue";
import DetailService from "./sub/service.vue";

export default {
  name: "HotelDetail",
  props: {
    detailData: {
      type: Object,
    },
  },
  components: {
    DetailName,
    DetailStars,
    DetailPosition,
    DetailPrice,
    DetailService,
  },
};
</script>

<style lang='scss' scoped>
</style>