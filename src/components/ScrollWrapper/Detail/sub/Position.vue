<template>
  <card-board icon="icon-positioning" iconColor="#999">
    <p class="address-text">{{address}}</p>
  </card-board>
</template>

<script>
import CardBoard from "../../sub/TitleBoard.vue";

export default {
  name: "DetailPosition",
  props: {
    address: {
      type: String,
    },
  },
  components: {
    CardBoard,
  },
};
</script>

<style scoped>
.address-text {
  font-size: 0.16rem;
}
</style>