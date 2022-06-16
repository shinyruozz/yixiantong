<template>
  <div class="hotel-item" @click="routerTo">
    <div class="img-wrap">
      <img :src="hotelData.img" alt />
    </div>
    <div class="info">
      <h3 class="title">{{hotelData.name}}</h3>
      <p class="score">{{hotelData.score}}分</p>
      <p class="address">{{hotelData.address}}</p>
      <div class="other">
        <span class="price">
          ￥
          <em>{{hotelData.default_price}}</em> 起
        </span>
        <span class="city-name">{{hotelData.city_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelSub",
  props: {
    hotelData: {
      type: Object,
    },
  },
  methods: {
    routerTo() {
      this.$router.push({
        path: "/detail",
        query: {
          filed: "massage",
          id: this.hotelData.id,
        },
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";
.hotel-item {
  @include flex-row;
  padding: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  .img-wrap {
    width: 1rem;
    height: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    flex: 1;
    min-width: 0;
    padding-left: 0.1rem;
    .title {
      @include ellipsis;
      font-size: 0.18rem;
    }
    .score {
      font-size: 0.16rem;
      color: $defaultBgColor;
      margin: 0.1rem 0;
    }
    .address {
      color: #999;
      font-size: 0.16rem;
      @include ellipsis;
    }
    .other {
      @include flex-row;
      justify-content: space-between;
      margin-top: 0.1rem;
      .price {
        color: $defaultGreen;
        font-size: 0.14rem;
        em {
          font-size: 0.18rem;
        }
      }
      .city-name {
        font-size: 0.14rem;
      }
    }
  }
}
</style>