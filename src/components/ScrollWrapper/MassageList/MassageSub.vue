<template>
  <div class="massage-item" @click="routerTo">
    <div class="img-wrap">
      <img :src="massageData.img" alt />
    </div>
    <div class="info">
      <h3 class="title">{{massageData.name}}</h3>
      <div class="star-wrap">
        <star :score="massageData.score"></star>
        <div class="score-text">{{massageData.score}}分</div>
      </div>
      <div class="other">
        <span class="price">
          ￥
          <em>{{massageData.default_price}}</em>元
        </span>
        <span class="city-name">{{massageData.city_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "../sub/Star.vue";
export default {
  name: "MassageSub",
  props: {
    massageData: {
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
          field: "massage",
          id: this.massageData.id,
        },
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";

.massage-item {
  @include flex-row;
  padding: 0.1rem;
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
    margin-left: 0.1rem;
    .title {
      font-size: 0.18rem;
      @include ellipsis;
    }
    .star-wrap {
      @include flex-row;
      align-items: center;
      padding: 0.15rem 0 0.2rem;
      .score-text {
        color: $defaultBgColor;
        font-size: 0.14rem;
        margin-left: 0.1rem;
      }
    }
    .other {
      @include flex-row;
      justify-content: space-between;
      align-content: center;
      .price {
        font-size: 0.14rem;
        em {
          color: #f60;
          font-size: 0.18rem;
        }
      }
      .city-name {
        font-size: 0.14rem;
        vertical-align: -0.05rem;
      }
    }
  }
}
</style>