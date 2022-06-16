<template>
  <div class="scroll-wrapper" ref="scroll">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "Scroll",
  mounted() {
    this.scroll = new BetterScroll(this.$refs.scroll);
  },
};
</script>

<style lang='scss' scoped>
</style>