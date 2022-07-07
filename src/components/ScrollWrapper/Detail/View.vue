<template>
  <div class="view-detail" v-if="detailData">
    <div class="content">
      <detail-name :name="detailData.name"></detail-name>

      <detail-stars :score="detailData.score"></detail-stars>

      <detail-position :address="detailData.address"></detail-position>

      <detail-price :price="detailData.default_price"></detail-price>

      <detail-date-time :dateTime="detailData.open_datetime"></detail-date-time>

      <detail-date-time :dateTime="detailData.open_datetime"></detail-date-time>

      <detail-tip :tip="detailData.tip"></detail-tip>

      <detail-intro icon="icon-intro" title="详细介绍" :content="detailData.intro"></detail-intro>
      <detail-intro icon="icon-intro" title="购票信息" :content="detailData.ticket_info"></detail-intro>
    </div>
  </div>
</template>

<script>
import CardBoard from "../sub/TitleBoard.vue";
import Star from "../sub/Star.vue";
import DetailName from "./sub/Name.vue";
import DetailStars from "./sub/Stars.vue";
import DetailPrice from "./sub/Price.vue";
import DetailPosition from "./sub/Position.vue";
import DetailDateTime from "./sub/DateTime.vue";
import DetailTip from "./sub/Tip.vue";
import DetailIntro from "./sub/CardBoard.vue";

export default {
  name: "ViewDetail",
  props: {
    detailData: {
      type: Object,
    },
  },
  components: {
    Star,
    CardBoard,
    DetailName,
    DetailStars,
    DetailPrice,
    DetailPosition,
    DetailDateTime,
    DetailTip,
    DetailIntro,
  },
};
</script>

<style lang='scss' scoped>
.content {
  .name-text {
    font-size: 0.16rem;
  }

  .address-text {
    font-size: 0.16rem;
  }
  .score-text {
    font-size: 0.16rem;
    color: #f60;
    padding-left: 0.1rem;
    padding-top: 0.05rem;
  }

  .price {
    font-size: 0.16rem;

    color: #f60;
  }

  .datetime {
    font-size: 0.14rem;
  }
}
</style>