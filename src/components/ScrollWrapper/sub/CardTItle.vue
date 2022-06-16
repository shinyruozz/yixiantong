<template>
  <div class="title">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "CardTitle",
  props: {
    title: {
      type: String,
      default: "一线通",
    },
  },
};
</script>

<style lang='scss' scoped>
.title {
  padding: 0.15rem 0.1rem;
  margin-top: 0.1rem;
  background-color: #fff;
  font-size: 0.18rem;
  border-bottom: 1px solid #ddd;
}
</style>