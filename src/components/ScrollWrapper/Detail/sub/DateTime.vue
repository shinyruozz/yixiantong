<template>
  <card-board icon="icon-datetime" iconColor="#999">
    <p class="datetime">{{dateTime}}</p>
  </card-board>
</template>

<script>
import CardBoard from "../../sub/TitleBoard.vue";

export default {
  name: "DetailName",
  props: {
    dateTime: {
      type: String,
    },
  },
  components: {
    CardBoard,
  },
};
</script>

<style scoped>
.datetime {
  font-size: 0.14rem;
}
</style>