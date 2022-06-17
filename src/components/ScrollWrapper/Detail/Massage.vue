<template>
  <div class="massage-detail">
    <detail-name :name="detailData.name"></detail-name>
    <detail-stars :score="detailData.score"></detail-stars>
    <detail-position :address="detailData.address"></detail-position>
    <detail-price :price="detailData.default_price"></detail-price>
    <detail-date-time :dateTime="detailData.open_datetime"></detail-date-time>

    <detail-comment-keyword :commentDatas="detailData.comment_keyword"></detail-comment-keyword>
    <detail-service :service="detailData.service"></detail-service>
  </div>
</template>


<script>
import DetailName from "./sub/Name.vue";
import DetailStars from "./sub/Stars.vue";
import DetailPosition from "./sub/Position.vue";
import DetailPrice from "./sub/Price.vue";
import DetailDateTime from "./sub/DateTime.vue";
import DetailCommentKeyword from "./sub/Commentkeyword.vue";
import DetailService from "./sub/service.vue";
export default {
  name: "MassageDetail",
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
    DetailDateTime,
    DetailCommentKeyword,
    DetailService,
  },
};
</script>

<style lang='scss' scoped>
</style>