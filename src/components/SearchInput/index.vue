<template>
  <div class="search-input">
    <div class="input-wrap">
      <span class="iconfont icon-header-search"></span>
      <input
        type="text"
        class="input"
        v-model="inputVal"
        :placeholder="placeholder"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
import { throttle } from "utils/tools";
export default {
  name: "SearchInput",
  data() {
    return {
      placeholder: "美食 / 景点 / 酒店 / 按摩 / KTV",
      inputVal: "",
    };
  },

  methods: {
    onInput: throttle(function () {
      this.$emit("onSearch", this.inputVal.trim());
    }, 500),
    clearInputVal() {
      this.inputVal = "";
    },
  },
};
</script>

<style lang='scss' scoped>
.search-input {
  height: 0.44rem;
  background-color: #fff;
  padding: 0.05rem 0.15rem;

  .input-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    .iconfont {
      position: absolute;
      color: #999;
      top: 0.1rem;
      left: 0.1rem;
    }
    .input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      font-size: 0.14rem;
      padding-left: 0.3rem;
      border: 1px solid #ccc;
      border-radius: 0.05rem;
    }
  }
}
</style>