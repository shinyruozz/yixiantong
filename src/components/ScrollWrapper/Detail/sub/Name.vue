<template>
  <card-board icon="icon-name">
    <p class="name-text">{{name}}</p>
  </card-board>
</template>

<script>
import CardBoard from "../../sub/TitleBoard.vue";

export default {
  name: "DetailName",
  props: {
    name: {
      type: String,
    },
  },
  components: {
    CardBoard,
  },
};
</script>

<style scoped>
.name-text {
  font-size: 0.16rem;
}
</style>