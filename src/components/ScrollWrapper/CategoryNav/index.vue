<template>
  <div class="category-nav">
    <category-sub v-for="field of fields" :key="field.id" :field="field"></category-sub>
  </div>
</template>

<script>
import CategorySub from "./CategorySub.vue";
export default {
  name: "CategoryNav",
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  components: {
    CategorySub,
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";

.category-nav {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0.05rem 0;
  border-bottom: 1px solid #ccc;
}
</style>