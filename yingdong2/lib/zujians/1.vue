<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item>
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"
          @click="show"
        >
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3118979124,3095730406&fm=26&gp=0.jpg"
          @click="show"
        >
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=794584381,3703292548&fm=26&gp=0.jpg"
          @click="show"
        >
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img
            src="https://img.alicdn.com/bao/uploaded/i3/TB1yOiOnYPpK1RjSZFFdb95PpXa_051835.jpg"
            @click="show"
          >
          <div class="mui-media-body">小米:1267</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img
            src="https://img.alicdn.com/bao/uploaded/i2/TB1jZYfdRjTBKNjSZFwATwG4XXa_041742.jpg"
            @click="show"
          >
          <div class="mui-media-body">华为:899</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/sanxin">
          <img
            src="https://img.alicdn.com/bao/uploaded/i7/TB1aFlyq4TpK1RjSZFKuHG2wXXa_025858.jpg"
            @click="show"
          >
          <div class="mui-media-body">三星:3449</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img
            src="https://img.alicdn.com/bao/uploaded/i8/TB1dcOyhScqBKNjSZFgEXN_kXXa_051152.jpg"
            @click="show"
          >
          <div class="mui-media-body">坚果:2555</div>
        </a>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img
            src="https://img.alicdn.com/bao/uploaded/i7/TB1NYCtvWSWBuNjSsrbOKy0mVXa_035758.jpg"
            @click="show"
          >
          <div class="mui-media-body">苹果:6000</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img
            src="https://img.alicdn.com/bao/uploaded/i3/TB141SAPFXXXXXTaXXXbqR_7FXX_010947.jpg"
            @click="show"
          >
          <div class="mui-media-body">红米:600</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunlist: []
    };
  },
  created: function() {
    this.getlun();
  },
  methods: {
    getlun: function() {
      //   this.$http
      //     .get("http://www.liulongbin.top:3005/api/getlunbo")
      //     .then(result => {
      //       if (result.body.status === 0) {
      //         this.lunList = result.body.message;
      //       } else {
      //         Toast("加载失败，请检查网络");
      //       }
      //     });
    },
    show() {
      Toast("连接资源加载中........");
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 180px;
}
// .mint-swipe-item {
//   &:nth-child(1) {
//     background-color: rgb(228, 116, 116);
//   }
//   &:nth-child(2) {
//     background-color: rgb(40, 150, 104);
//   }
//   &:nth-child(3) {
//     background-color: rgb(35, 22, 105);
//   }
// }
img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: white;
  margin-bottom: 0px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
.mui-grid-view.mui-grid-9 li {
  margin-left: 15px;
  margin-top: 0px;
  height: 120px;
  width: 100px;
}
.mui-grid-view.mui-grid-9 li:hover {
  background-color: #ccc;
}
</style>

