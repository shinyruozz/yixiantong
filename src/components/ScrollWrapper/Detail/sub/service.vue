<template>
  <div class="service">
    <div class="title-hd">
      <span class="iconfont icon-service"></span>
      <h3 class="title">{{title}}</h3>
    </div>
    <div class="content">
      <p class="item" v-for="(value,key) in service" :key="key">{{serviceItemText(value,key)}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailService",
  props: {
    service: Object,
  },
  data() {
    return {
      title: "商家服务",
    };
  },
  methods: {
    serviceItemText(value, key) {
      let str = "";
      if (key == "parking") {
        str += "停车场：";
      } else if (key == "wifi") {
        str += key.toUpperCase() + "：";
      }

      str += value ? "有" : "无";
      return str;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
.service {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  .title-hd {
    display: flex;
    padding: 0.15rem;
    border-bottom: 1px solid #ccc;
    align-items: center;
    margin-top: 0.2rem;
    .iconfont {
      color: $defaultGreen;
      margin-right: 0.1rem;
    }
    .title {
      font-size: 0.16rem;
      color: $defaultGreen;
    }
  }
  .content {
    padding: 0.15rem;
    font-size: 0.16rem;
    line-height: 0.2rem;
  }
}
</style>