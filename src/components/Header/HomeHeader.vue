<template>
  <header class="header">
    <city-selector></city-selector>
    <false-input :placeholder="placeholder"></false-input>
  </header>
</template>

<script>
import CitySelector from "./sub/CitySelector.vue";
import FalseInput from "./sub/FalseInput.vue";

export default {
  name: "HomeHeader",
  components: {
    CitySelector,
    FalseInput,
  },
  data() {
    return {
      placeholder: "美食 / 景点 / 酒店 / 按摩 / KTV",
    };
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";
.header {
  height: $headerHeight;
  @include flex-row;
  background-color: $defaultBgColor;
}
</style>