<template>
  <div class="xin">
    <div class="xin-item" id="1">
      <img
        src="http://img1.360buyimg.com/n6/jfs/t24631/80/1358152621/381713/44b54daa/5baf26d6Nbbd9b2c2.jpg"
      >
      <h1>三星：note 16G+5G双通版</h1>
      <div class="info">
        <p class="price">￥2199</p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余 890件</span>
        </p>
      </div>
    </div>
    <div class="xin-item" id="2">
      <img
        src="http://img1.360buyimg.com/n6/jfs/t1/11807/27/5465/120508/5c3321e8E45bf7132/c5ba21e6c2a0adf3.jpg"
      >
      <h1>三星：note 16G+5G双通版</h1>
      <div class="info">
        <p class="price">￥2199</p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余 890件</span>
        </p>
      </div>
    </div>
    <router-link class="xin-item" to="/home/sanxin/sansan" id="3"> 
      <img
        src="http://img1.360buyimg.com/n6/jfs/t1/1422/9/8371/234410/5baa0412E86b7a00e/1cf0da2d95fc4e88.jpg"
      >
      <h1>三星：note 16G+5G双通版</h1>
      <div class="info">
        <p class="price">￥2199</p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余 890件</span>
        </p>
      </div>
    </router-link>
    <div class="xin-item" id="4">
      <img
        src="http://img1.360buyimg.com/n6/jfs/t1/14781/31/4908/127162/5c373e68E0768a75d/4bc95836e8a19a04.jpg"
      >
      <h1>三星：note 16G+5G双通版</h1>
      <div class="info">
        <p class="price">￥2199</p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余 890件</span>
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.xin {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  .xin-item {
    border: 1px #ccc solid;
    margin-top: 1px;
    padding-left: 1px;
    width: 49%;
    img {
      width: 100%;
    }
    h1 {
      font-size: 14px;
    }
    .info{
        background-color: #ccc;
        p{
            margin: 0;
            padding: 3px;
        }
        .price{
            color:red;
            font-size: 20px
        }
        .sell{
            display: flex;
            justify-content: space-between;
        }
    }
  }
}
</style>