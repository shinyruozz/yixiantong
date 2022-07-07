<template>
  <div class="view-item" @click="routerTo">
    <div class="img-wrap">
      <img :src="viewData.img" alt />
    </div>
    <div class="address-name">{{viewData.address}}</div>
    <div class="star-wrap">
      <star :score="viewData.score"></star>
      <span class="score-text">{{viewData.score}}分</span>
    </div>
    <div class="other">
      <span class="item">
        ￥
        <span class="price">{{viewData.default_price}}</span>
        起
      </span>
      <span class="item">{{viewData.city_name}}</span>
    </div>
  </div>
</template>

<script>
import Star from "../sub/Star.vue";
export default {
  name: "ViewItem",
  props: {
    viewData: {
      type: Object,
    },
  },
  components: {
    Star,
  },
  methods: {
    routerTo() {
      this.$router.push({
        path: "/detail",
        query: {
          field: "view",
          id: this.viewData.id,
        },
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
@import "~style/mixins.scss";
.view-item {
  width: 50%;
  padding: 0.1rem;
  .img-wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .address-name {
    @include ellipsis;
    font-size: 0.16rem;
    padding: 0.1rem 0;
  }
  .star-wrap {
    @include flex-row;
    align-items: center;
    margin-bottom: 0.1rem;
    font-size: 0.16rem;
    .score-text {
      margin-left: 0.05rem;
      color: $defaultBgColor;
      font-size: 0.15rem;
    }
  }

  .other {
    font-size: 0.16rem;
    @include flex-row;
    justify-content: space-between;
    padding-bottom: 0.1rem;
    .price {
      color: $defaultGreen;
      font-size: 0.18rem;
    }
  }
}
</style>