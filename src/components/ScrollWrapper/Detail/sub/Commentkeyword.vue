<template>
  <div class="comment">
    <div class="title-hd">
      <span class="iconfont icon-haoping"></span>
      <h3 class="title">{{title}}</h3>
    </div>
    <div class="content">
      <span class="tag" v-for="kwItem of commentDatas" :key="kwItem">{{kwItem}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailService",
  props: {
    commentDatas: Array,
  },
  data() {
    return {
      title: "评论关键词",
    };
  },
};
</script>

<style lang='scss' scoped>
@import "~style/variables.scss";
.comment {
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
    display: flex;
    flex-wrap: wrap;
    padding: 0.15rem;
    // justify-content: center;
    .tag {
      display: inline-block;
      margin: 0 0.05rem 0.05rem 0;
      padding: 0.05rem;
      color: $defaultGreen;
      border: 1px solid $defaultGreen;
      border-radius: 0.03rem;
      font-size: 0.14rem;
    }
  }
}
</style>