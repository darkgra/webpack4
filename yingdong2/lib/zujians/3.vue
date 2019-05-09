<template >
  <div >
    <div v-if="!$store.state.tog"> 
      <h1 style="color:red">当前还没有商品哦，请移步到首页中挑选</h1>
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=233455307,1568511190&fm=27&gp=0.jpg"
        alt
      >
    </div>

    <div class="wa" v-if="$store.state.tog">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner" v-if="this.hua">
            <mt-switch @change="huan2"></mt-switch>

            <img
              src="https://img10.360buyimg.com/n7/jfs/t19192/350/18705470/82412/6e299c9/5a5822ecN3b00ebc3.jpg"
              alt
            >
            <div class="info">
              <h3>&nbsp;&nbsp;&nbsp;小米（mi）浅蓝版 4G+32G</h3>
              <div>
                <span class="price" style="color:red">￥{{shi}}</span>
                <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
                  <button class="mui-btn mui-btn-numbox-minus" type="button" @click="jian">-</button>
                  <input
                    id="test"
                    class="mui-input-numbox"
                    type="number"
                    :value="$store.state.count"
                  >
                  <button class="mui-btn mui-btn-numbox-plus" type="button" @click="jia">+</button>
                </div>
                <a href="#" @click="huan">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-content io">
          <h4 class="mui-card-content-inner">总价:￥
            <div style="color:red">{{shi2}}</div>
          </h4>
          <mt-button type="primary" size="small" class="pp" v-if="this.kp">立即购买</mt-button>
        </div>
      </div>
      <hr>
      <xiong1></xiong1>
      <hr>
      <xiong2></xiong2>
    </div>
  </div>
</template>

<script>
import xiong1 from "./xiong1.vue";
import xiong2 from "./xiong2.vue";

export default {
  data() {
    return {
      shi: this.$store.state.carx[0].price || 0,
      shi2: this.$store.state.carx[0].price * this.$store.state.count,
      hua: true,
      kp: false
    };
  },
  components: {
    xiong1,
    xiong2
  },
  methods: {
    jia() {
      this.$store.commit("add", 1);
      this.shi2 = this.$store.state.carx[0].price * this.$store.state.count;
    },
    jian() {
      this.$store.commit("dda", 1);
      this.shi2 = this.$store.state.carx[0].price * this.$store.state.count;
    },
    huan() {
      this.hua = !this.hua;
      this.shi2=0;
    },
    huan2() {
      this.kp = !this.kp;
    }
  }
};
</script>

<style lang="scss" scoped>
.wa {
  overflow: hidden;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;
}

.mui-card-content-inner img {
  height: 100%;
  width: 50px;
}
h3 {
  font-size: 14px;
}
.io {
  display: flex;
}
.pp {
  margin-top: 10px;
}
</style>

