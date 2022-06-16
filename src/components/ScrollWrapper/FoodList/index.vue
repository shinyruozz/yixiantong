<template>
  <div class="food-list">
    <food-sub v-for="food of foodDatas" :key="food.id" :foodData="food"></food-sub>
  </div>
</template>

<script>
import FoodSub from "./FoodSub.vue";
export default {
  name: "FoodList",
  props: {
    foodDatas: {
      type: Array,
    },
  },
  components: {
    FoodSub,
  },
};
</script>

<style lang='scss' scoped>
@import "~style/mixins.scss";

.food-list {
  @include flex-column;
  //   border-bottom: 1px solid #ddd;
  background-color: #fff;
}
</style>