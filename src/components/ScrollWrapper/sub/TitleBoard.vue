<template>
  <div class="board">
    <span :class="['iconfont' ,icon]" :style="{'color':iconColor}"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardBorad",
  props: {
    icon: {
      type: String,
    },
    iconColor: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang='scss' scoped>
.board {
  display: flex;
  padding: 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  align-items: center;

  .iconfont {
    font-size: 0.2rem;
    padding-right: 0.1rem;
  }
}
</style>