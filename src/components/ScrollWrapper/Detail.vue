<template>
  <scroll>
    <template v-if="!errorShow">
      <swiper :picDatas="detailData.pics" v-if="detailData"></swiper>

      <component :is="detailComponent" :detailData="detailData" v-if="detailData"></component>
    </template>
    <error v-else></error>
  </scroll>
</template>

<script>
import Scroll from "./Scroll.vue";
import FoodDetail from "./Detail/Food.vue";
import MassageDetail from "./Detail/Massage.vue";
import ViewDetail from "./Detail/View.vue";
import KtvDetail from "./Detail/Ktv.vue";
import HotelDetail from "./Detail/Hotel.vue";
import Swiper from "./sub/Swiper.vue";
import detailModel from "model/detail";
import Error from "./sub/Error.vue";

import { strToArr, replaceToSpace, jsonToArr } from "utils/tools";

export default {
  name: "DetailScrollWrapper",
  props: {},
  components: {
    Scroll,
    FoodDetail,
    MassageDetail,
    ViewDetail,
    KtvDetail,
    HotelDetail,
    Swiper,
    Error,
  },
  data() {
    return {
      queryInfo: {
        field: null,
        id: null,
      },
      detailData: null,
      errorShow: false,
    };
  },
  computed: {
    detailComponent() {
      return this.queryInfo.field + "-detail";
    },
  },
  created() {
    this.getDetailQuery();
    this.getDetail();
  },
  methods: {
    getDetailQuery() {
      const { id, field } = this.$route.query;
      this.queryInfo.field = field;
      this.queryInfo.id = id;
    },
    getDetail() {
      const { field, id } = this.queryInfo;
      detailModel.getDetail(id, field).then((res) => {
        const {
          status,
          res: { data },
        } = res;

        if (data && status == 1) {
          data.pics && (data.pics = jsonToArr(data.pics));
          data.comment_keyword &&
            (data.comment_keyword = strToArr(data.comment_keyword));

          data.recom && (data.recom = replaceToSpace(data.recom));
          data.service && (data.service = jsonToArr(data.service));
          this.detailData = data;
          console.log(this.detailData);
        } else {
          // 请求不到数据情况
          this.errorShow = true;
        }
      });
    },
  },
};
</script>

<style>
</style>