<template>
  <div class="food-detail">
    <detail-name :name="detailData.name"></detail-name>
    <detail-stars :score="detailData.score"></detail-stars>
    <detail-position :address="detailData.address"></detail-position>
    <detail-price :price="detailData.default_price"></detail-price>
    <detail-date-time :dateTime="detailData.open_datetime"></detail-date-time>

    <card-board v-bind="bindRecom"></card-board>

    <detail-comment-keyword :commentDatas="detailData.comment_keyword"></detail-comment-keyword>
  </div>
</template>

<script>
import DetailName from "./sub/Name.vue";
import DetailStars from "./sub/Stars.vue";
import DetailPosition from "./sub/Position.vue";
import DetailPrice from "./sub/Price.vue";
import DetailDateTime from "./sub/DateTime.vue";
import CardBoard from "./sub/CardBoard.vue";
import DetailCommentKeyword from "./sub/Commentkeyword.vue";

export default {
  name: "FoodDetail",
  props: {
    detailData: {
      type: Object,
    },
  },
  components: {
    CardBoard,
    DetailName,
    DetailStars,
    DetailPosition,
    DetailPrice,
    DetailDateTime,
    DetailCommentKeyword,
  },
  data() {
    return {
      bindRecom: {
        icon: "icon-recom",
        title: "推荐菜品",
        content: this.detailData.recom,
      },
      bindCommentKw: {
        icon: "icon-haoping",
        title: "推荐菜品",
        content: this.detailData.recom,
      },
    };
  },
};
</script>

<style lang='scss' scoped>
</style>