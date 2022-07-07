<template>
  <div class="container">
    <common-header title="商家搜索"></common-header>

    <search-input @onSearch="onSearch" ref="searchInput"></search-input>

    <search-scroll :searchData="searchData"></search-scroll>
  </div>
</template>

<script>
import CommonHeader from "../components/Header/CommontHeader.vue";
import SearchInput from "../components/SearchInput";
import SearchScroll from "../components/ScrollWrapper/Search.vue";

import searchModel from "model/search";
import { mapState } from "vuex";
export default {
  name: "Search",
  components: {
    CommonHeader,
    SearchInput,
    SearchScroll,
  },
  data() {
    return {
      searchData: {},
    };
  },
  computed: {
    ...mapState(["cityInfo"]),
  },

  beforeRouteLeave(to, from, next) {
    // 不保存状态
    if (to.path !== "/detail") {
      this.searchData = {};
      this.$refs.searchInput.clearInputVal();
    }
    next();
  },

  methods: {
    //判断搜索是否有数据
    onSearch(value) {
      searchModel.searchData(value, this.cityInfo.cityId).then((res) => {
        const { status, data } = res;
        if (status == 1 && data) {
          this.searchData = data;
        } else {
          this.searchData = {};
        }
      });
    },
  },
};
</script>

<style>
</style>