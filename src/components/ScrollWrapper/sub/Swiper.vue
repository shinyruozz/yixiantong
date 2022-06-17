<template>
  <div class="swiper-wrap" v-if="picDatas">
    <swiper :options="swiperOption">
      <swiper-slide v-for="pic of picDatas" :key="pic" class="swiper-slide">
        <img :src="pic" alt class="swiper-img" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Swiper",
  props: {
    picDatas: {
      type: Array,
    },
  },
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang='scss' scoped>
.swiper-wrap,
.swiper-wrap >>> .swiper-container {
  height: 2rem;
}

.swiper-wrap >>> .swiper-pagination-bullet {
  background: #fff;
  opacity: 0.7;
}

.swiper-wrap >>> .swiper-pagination-bullet-active {
  background: #06c1ae;
}

.swiper-img {
  width: 100%;
  height: 100%;
}
</style>