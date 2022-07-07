<template>
  <scroll>
    <template v-if="!errorShow">
      <view-list v-if="cityInfo.field=='view'" :viewDatas="curListData"></view-list>
      <food-list v-else-if="cityInfo.field=='food'" :foodDatas="curListData"></food-list>
      <hotel-list v-else-if="cityInfo.field=='hotel'" :hotelDatas="curListData"></hotel-list>
      <massage-list v-else-if="cityInfo.field=='massage'" :massageDatas="curListData"></massage-list>
      <ktv-list v-else-if="cityInfo.field=='ktv'" :ktvDatas="curListData"></ktv-list>

      <loading v-show="loadingShow"></loading>
    </template>
    <error v-else></error>
  </scroll>
</template>

<script>
import Scroll from "./Scroll.vue";
import Error from "./sub/Error.vue";
import Loading from "./sub/Loading.vue";

import { mapState } from "vuex";

import listModel from "model/list";
import { jsonToArr, strToArr, replaceToSpace } from "utils/tools";
export default {
  name: "ListScrollWrapper",
  components: {
    Scroll,
    Error,
    Loading,
    ViewList: () => import("./ViewList"),
    FoodList: () => import("./FoodList"),
    HotelList: () => import("./HotelList"),
    MassageList: () => import("./MassageList"),
    KtvList: () => import("./KTVList"),
  },
  data() {
    return {
      listData: {},
      errorShow: false,
      loadingShow: false,
    };
  },
  computed: {
    ...mapState(["cityInfo"]),
    curListData() {
      return this.listData[this.cityInfo.cityId];
    },
  },
  methods: {
    getListData() {
      const { cityId, field } = this.cityInfo;
      // 缓存
      if (!this.listData[cityId]) {
        this.loadingShow = true;
        listModel.getListDatas(cityId, field).then((result) => {
          const { status, data } = result;
          if (data && status == 1) {
            data.pics && (data.pics = jsonToArr(data.pics));
            data.comment_keyword &&
              (data.comment_keyword = strToArr(data.comment_keyword));
            data.recom && (data.recom = replaceToSpace(data.recom));
            data.service && (data.service = jsonToArr(data.service));
            // this.listData[cityId] = data;
            this.$set(this.listData, cityId, data);
            this.loadingShow = false;
          } else {
            this.errorShow = true;
          }
        });
      }
    },
  },
  mounted() {
    this.getListData();
  },
  watch: {
    cityInfo: {
      deep: true,
      handler: function (newVal, oldVal) {
        this.getListData();
      },
    },
  },
};
</script>

<style>
</style>