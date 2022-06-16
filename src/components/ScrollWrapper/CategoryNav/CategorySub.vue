<template>
  <div class="category-sub" @click="cateSubClick">
    <div class="icon" :style="bgColorStyle">
      <i :class="['iconfont', field.icon]"></i>
    </div>
    <span class="cate-text">{{field.iconText}}</span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CategorySub",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bgColorStyle() {
      return {
        backgroundColor: this.field.bgColor,
      };
    },
  },
  methods: {
    ...mapMutations(["fieldChange"]),
    cateSubClick() {
      this.fieldChange(this.field);
      this.$router.push("/list");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";
.category-sub {
  width: 20%;
  @include flex-column;
  @include vh-center;
  padding: 0.1rem 0;
  .icon {
    overflow: hidden;
    border-radius: 50%;
    width: 0.4rem;
    height: 0.4rem;

    @include vh-center;
    margin-bottom: 0.1rem;
    .iconfont {
      font-size: 0.26rem;
      color: #fff;
    }
  }
  .cate-text {
    font-size: 0.14rem;
  }
}
</style>