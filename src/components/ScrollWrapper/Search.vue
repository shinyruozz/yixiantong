<template>
  <scroll>
    <no-data-tip v-if="noDataTipShow"></no-data-tip>
    <template v-else>
      <div class="view-cate" v-if="searchData.viewDatas&&searchData.viewDatas.length">
        <cate-title title="景点结果:"></cate-title>
        <view-list :viewDatas="searchData.viewDatas"></view-list>
      </div>
      <div class="food-cate" v-if="searchData.foodData&&searchData.foodDatas.length">
        <cate-title title="食物结果:"></cate-title>
        <food-list :viewDatas="searchData.foodDatas"></food-list>
      </div>
      <div class="hotel-cate" v-if="searchData.hotelDatas && searchData.hotelDatas.length">
        <cate-title title="酒店结果:"></cate-title>
        <hotel-list :hotelDatas="searchData.hotelDatas"></hotel-list>
      </div>
      <div class="massage-cate" v-if="searchData.massageDatas&&searchData.massageDatas.length">
        <cate-title title="按摩结果:"></cate-title>
        <massage-list :massageDatas="searchData.massageDatas"></massage-list>
      </div>
      <div class="ktv-cate" v-if="searchData.ktvDatas&&searchData.ktvDatas.length">
        <cate-title title="ktv结果:"></cate-title>
        <ktv-list :ktvDatas="searchData.ktvDatas"></ktv-list>
      </div>
    </template>
  </scroll>
</template>

<script>
import Scroll from "./Scroll.vue";
import NoDataTip from "./sub/NoDataTip.vue";
import CateTitle from "./sub/CardTItle.vue";
import ViewList from "./ViewList";
import FoodList from "./FoodList";
import HotelList from "./HotelList";
import MassageList from "./MassageList";
import KtvList from "./KTVList";

export default {
  name: "SearchScrollWrapper",
  components: {
    Scroll,
    NoDataTip,
    CateTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
  },
  props: {
    searchData: {
      type: [Array, Object],
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      noDataTipShow: true,
    };
  },

  watch: {
    searchData: {
      deep: true,
      handler: function (newValue, oldValue) {
        for (let k in newValue) {
          if (newValue[k].length > 0) {
            this.noDataTipShow = false;
            return;
          }
        }
        this.noDataTipShow = true;
      },
    },
  },
};
</script>

<style>
</style>