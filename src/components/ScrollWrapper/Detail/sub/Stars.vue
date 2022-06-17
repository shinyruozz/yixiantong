<template>
  <card-board icon="icon-smile">
    <star :score="score"></star>
    <span class="score-text">{{score}}分</span>
  </card-board>
</template>

<script>
import CardBoard from "../../sub/TitleBoard.vue";
import Star from "../../sub/Star.vue";

export default {
  name: "DetailStars",
  props: {
    score: {
      type: [Number, String],
    },
  },
  components: {
    CardBoard,
    Star,
  },
};
</script>

<style lang='scss' scoped>
.score-text {
  font-size: 0.16rem;
  color: #f60;
  padding-left: 0.1rem;
  padding-top: 0.05rem;
}
</style>