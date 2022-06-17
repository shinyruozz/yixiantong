<template>
  <card-board icon="icon-price">
    <p class="price">￥{{price}}元起</p>
  </card-board>
</template>

<script>
import CardBoard from "../../sub/TitleBoard.vue";

export default {
  name: "DetailPrice",
  props: {
    price: {
      type: String,
    },
  },
  components: {
    CardBoard,
  },
};
</script>

<style scoped>
.price {
  font-size: 0.16rem;

  color: #f60;
}
</style>