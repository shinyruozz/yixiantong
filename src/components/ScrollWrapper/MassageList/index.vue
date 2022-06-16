<template>
  <div class="massage-list">
    <massage-sub v-for="item of massageDatas" :key="item.id" :massageData="item"></massage-sub>
  </div>
</template>

<script>
import MassageSub from "./MassageSub.vue";
export default {
  name: "MassageList",
  props: {
    massageDatas: {
      type: Array,
    },
  },
  components: {
    MassageSub,
  },
};
</script>

<style lang='scss' scoped>
.massage-list {
  background-color: #fff;
}
</style>