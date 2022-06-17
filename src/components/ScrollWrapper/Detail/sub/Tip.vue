<template>
  <card-board icon="icon-tip" iconColor="#999">
    <p class="tip-text">{{tip}}</p>
  </card-board>
</template>

<script>
import CardBoard from "../../sub/TitleBoard.vue";

export default {
  name: "DetailName",
  props: {
    tip: {
      type: String,
    },
  },
  components: {
    CardBoard,
  },
};
</script>

<style scoped>
.tip-text {
  font-size: 0.14rem;
}
</style>