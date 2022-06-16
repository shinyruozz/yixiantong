<template>
  <div class="food-item" @click="routerTo">
    <div class="img-wrap">
      <img :src="foodData.img" alt />
    </div>
    <div class="info">
      <h3 class="title">{{foodData.name}}</h3>
      <div class="star-wrap">
        <star :score="foodData.score"></star>
        <div class="price-text">￥{{foodData.default_price}}/人</div>
      </div>
      <div class="tags">
        <span v-for="item of foodData.keyword" :key="item" class="tag-item">{{item}}</span>
      </div>
      <div class="other">
        <span class="field">{{foodData.field}}</span>
        <span class="address">{{foodData.city_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "../sub/Star.vue";
export default {
  name: "FoodSub",
  props: {
    foodData: {
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
          field: "food",
          id: this.foodData.id,
        },
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~style/mixins.scss";

.food-item {
  @include flex-row;

  padding: 0.1rem 0 0.1rem 0.1rem;
  border-bottom: 1px solid #ddd;
  .img-wrap {
    width: 1rem;
    height: 1rem;
    // pad
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    @include flex-column;
    flex: 1;
    min-width: 0;
    padding: 0 0.1rem;
    .title {
      font-size: 0.18rem;
      @include ellipsis;
    }
    .star-wrap {
      @include flex-row;
      align-items: center;
      .price-text {
        font-size: 0.15rem;
        padding-top: 0.08rem;
        margin-left: 0.05rem;
      }
    }

    .tags {
      padding-bottom: 0.12rem;
      .tag-item {
        margin-right: 0.05rem;
        padding: 0.02rem 0.05rem;
        background-color: #fbf4e4;
        font-size: 0.12rem;
        white-space: nowrap;
        color: #be9e4d;
      }
    }

    .other {
      @include flex-row;
      justify-content: space-between;
      font-size: 0.14rem;
    }
  }
}
</style>