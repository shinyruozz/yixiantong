<template>
  <div class="star">
    <span
      :class="['iconfont icon-star', {'active': starCls(index)}]"
      v-for="(item,index) of 5"
      :key="item"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: [Number, String],
    },
  },
  methods: {
    starCls(index) {
      if (this.score - index >= 0.5) {
        return true;
      } else {
        false;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";

.star {
  display: flex;
  align-items: center;
}

.icon-star {
  padding-right: 0.03rem;
  color: #ccc;
}
.active {
  color: $defaultBgColor;
}
</style>