<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <img
            src="http://img1.360buyimg.com/n6/jfs/t1/6458/26/16229/89133/5c74bb98E6e0b5dd4/4dd12f4bbdc5c703.png"
          >
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">小米 红米Redmi Note7 幻彩渐变AI双摄 4GB+64GB 梦幻蓝</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <h4 class="price">
            市场价：
            <del>￥2399</del> &nbsp;&nbsp;&nbsp;现售价：
            <span style="color:red">￥{{pricex}}</span>
          </h4>
          <h4>购买数量：
            <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
              <button class="mui-btn mui-btn-numbox-minus" type="button" @click="jian1">-</button>
              <input id="test" class="mui-input-numbox" type="number" :value="bian">
              <button class="mui-btn mui-btn-numbox-plus" type="button" @click="jia1">+</button>
            </div>
          </h4>
          <h4>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="jia">加入购物车</mt-button>
          </h4>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <pre class="mui-card-content-inner">
       CPU型号        高通 骁龙835（MSM8998）
       CPU频率        2.45GHz        
       核心数         八核         
       GPU型号        高通 Adreno540         
       RAM容量        6GB
       ROM容量        64GB/128GB
       存储类型       RAM：LPDDR4X 1866MHz 双通道，ROM：UFS         
       电池类型       不可拆卸式电池         
       电池容量       3350mAh         
       电池充电       快速充电（快充3.0，18W充电）                           
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      bian: 1,
      pricex: 2099,
    };
  },
  methods: {
    jia1() {
      this.bian++;
    },
    jian1() {
      this.bian--;
    },
    jia() {
      this.$store.commit("add", this.bian);
      var cardx = {
        count: this.bian,
        price: this.pricex,
        length:this.bian
      };
      this.$store.commit("tocar", cardx);
      Toast("添加成功");
      this.$store.state.tog=true
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-card-content-inner img {
  width: 100%;
  height: 200px;
}
pre {
  margin: 0;
  padding: 0;
}
</style>