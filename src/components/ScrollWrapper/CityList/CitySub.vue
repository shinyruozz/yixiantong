<template>
  <div class="city-item">
    <p class="city-name" @click="selectCity">{{cityInfo.cityName}}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CitySub",
  props: {
    cityInfo: {
      type: Object,
    },
  },
  methods: {
    ...mapMutations(["cityChange"]),
    selectCity() {
      this.cityChange(this.cityInfo);
      this.$router.push("/");
    },
  },
};
</script>

<style lang='scss' scoped>
.city-item {
  padding: 0.18rem 0.15rem;

  background-color: #fff;
  font-size: 0.16rem;
  border-bottom: 1px solid #ddd;
}
</style>