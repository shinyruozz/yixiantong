<template>
  <div class="header">
    <back-ward></back-ward>
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
import BackWard from "./sub/BackWard.vue";
export default {
  name: "CommentHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    BackWard,
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";

.header {
  @include vh-center;
  height: $headerHeight;
  background-color: $defaultBgColor;
  .title {
    font-size: 0.18rem;
  }
}
</style>