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
  methods: {
    refresh(cb) {
      this.scroll.refresh();
      cb && cb();
    },
  },
};
</script>

<style lang='scss' scoped>
</style>