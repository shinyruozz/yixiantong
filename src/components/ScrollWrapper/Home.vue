<template>
  <scroll>
    <template v-if="!errorShow">
      <category-nav :fields="fields"></category-nav>

      <home-recommend-title :title="recommendTitle.viewTitle"></home-recommend-title>
      <view-list :viewDatas="homeDatas.viewDatas"></view-list>

      <home-recommend-title :title="recommendTitle.foodTitle"></home-recommend-title>
      <food-list :foodDatas="homeDatas.foodDatas"></food-list>

      <home-recommend-title :title="recommendTitle.hotelTitle"></home-recommend-title>
      <hotel-list :hotelDatas="homeDatas.hotelDatas"></hotel-list>

      <home-recommend-title :title="recommendTitle.massageTitle"></home-recommend-title>
      <massage-list :massageDatas="homeDatas.massageDatas"></massage-list>

      <home-recommend-title :title="recommendTitle.ktvTitle"></home-recommend-title>
      <ktv-list :ktvDatas="homeDatas.ktvDatas"></ktv-list>
    </template>
    <!-- 网络出错显示 -->
    <error v-else></error>
  </scroll>
</template>

<script>
import Scroll from "./Scroll.vue";
import CategoryNav from "./CategoryNav";
import HomeRecommendTitle from "./sub/CardTItle.vue";
import ViewList from "./ViewList";
import FoodList from "./FoodList";
import HotelList from "./HotelList";
import MassageList from "./MassageList";
import KtvList from "./KTVList";
import Error from "./sub/Error.vue";

import fields from "@/assets/data/fields";

import homeModel from "model/home.js";
import { mapState } from "vuex";
export default {
  name: "HomeScrollWrapper",
  components: {
    Scroll,
    CategoryNav,
    HomeRecommendTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error,
  },

  data() {
    return {
      fields,
      recommendTitle: {
        viewTitle: "推荐景点",
        foodTitle: "推荐美食",
        hotelTitle: "推荐酒店",
        massageTitle: "推荐按摩",
        ktvTitle: "推荐KTV",
      },
      homeDatas: {},
      curCityId: null,
      errorShow: false,
    };
  },
  activated() {
    // 缓存池
    if (this.curCityId != this.cityInfo.cityId) {
      this.getHomeDatas();
    }
  },

  computed: {
    ...mapState(["cityInfo"]),
  },
  created() {
    this.getHomeDatas();
  },
  methods: {
    getHomeDatas() {
      homeModel.getHomeDatas(this.cityInfo.cityId).then((res) => {
        if (res && res.status) {
          this.homeDatas = res.data;
          this.curCityId = this.cityInfo.cityId;
        } else {
          this.errorShow = true;
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
</style>