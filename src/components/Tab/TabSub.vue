<template>
  <div
    :class="['tab-item', {active: cityInfo.cityId == data.cityId}]"
    @click="subClick"
  >{{data.cityName }}</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "TabSub",
  props: {
    data: {
      type: Object,
    },
  },

  computed: {
    ...mapState(["cityInfo"]),
  },
  methods: {
    ...mapMutations(["cityChange"]),
    subClick() {
      this.cityChange(this.data);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";

.tab-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  font-size: 0.16rem;
  border-bottom: 2px solid transparent;
  flex-shrink: 0;
  &.active {
    border-bottom: 2px solid $defaultGreen;
  }
}
</style>