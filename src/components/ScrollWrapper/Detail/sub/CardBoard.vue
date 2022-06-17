<template>
  <div class="intro">
    <card-board :icon="icon" iconColor="#06c1ae">
      <p class="title">{{title}}</p>
    </card-board>
    <div class="content">
      <slot>
        <p class="text">{{content}}</p>
      </slot>
    </div>
  </div>
</template>

<script>
import CardBoard from "../../sub/TitleBoard.vue";

export default {
  name: "DetailName",
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  components: {
    CardBoard,
  },
};
</script>

<style lang='scss' scoped>
.intro {
  margin-top: 0.2rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  .title {
    font-size: 0.16rem;
    color: #06c1ae;
  }
  .content {
    padding: 0.15rem;
    font-size: 0.14rem;
  }
  .text {
    line-height: 0.2rem;
    text-indent: 0.2rem;
  }
}
</style>