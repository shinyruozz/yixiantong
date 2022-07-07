<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <list-tab :tabDatas="cityData"></list-tab>
    <list-scroll></list-scroll>
  </div>
</template>

<script>
import CommonHeader from "../components/Header/CommontHeader.vue";
import ListTab from "../components/Tab";
import ListScroll from "../components/ScrollWrapper/List.vue";

import { mapState } from "vuex";
import fields from "@/assets/data/fields.js";
import cityData from "@/assets/data/city.js";
export default {
  name: "List",
  components: {
    CommonHeader,
    ListTab,
    ListScroll,
  },
  data() {
    return {
      title: "",
      cityData,
    };
  },
  computed: {
    ...mapState(["cityInfo"]),
  },
  mounted() {
    this.setTitle();
  },
  methods: {
    setTitle() {
      const findRes = fields.find((item) => item.field == this.cityInfo.field);
      findRes && (this.title = findRes.iconText + "列表");
    },
  },
};
</script>

<style>
</style>