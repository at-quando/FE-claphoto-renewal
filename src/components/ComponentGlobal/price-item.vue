<template>
  <div v-if="price" class="cp-price-item">
    <h2 class="title">{{price.num_pp}}</h2>
    <div v-if="price.types == 0" class="price-holder">
      <p>{{price.priceFirst}}k/<i class="fa fa-user"></i> cho 30 người đầu tiên</p>
      <h6>từ người thứ 31 chỉ còn</h6>
      <b :style="{'color': colorArr[Math.floor(Math.random()*colorArr.length)]}"><sup>VND</sup>{{price.price}}k
      <span><i class="fa fa-user"></i></span></b>
      <hr>
    </div>
    <div v-if="price.types == 1" class="price-holder">
      <p>Áp dụng theo gói không giới hạn sĩ số</p>
      <b :style="{'color': colorArr[Math.floor(Math.random()*colorArr.length)]}"><sup>VND</sup>{{price.price}}k</b>
      <hr>
    </div>
    <p>Số thợ chụp: sĩ số / 20</p>
    <p v-if="price.takenTime">Thời gian: <b>{{price.takenTime}}</b></p>
    <ul>
      <li v-for="(item, index) of price.offer.split('/')" :key="index">
        <a href="#">{{item}}</a>
      </li>
      <li class="btn-buynow"><a href="#">Book Now</a></li>
    </ul>
  </div>
</template>
<script>
  export default{
    props: ['price'],
    data() {
      return {
        colorArr: ['#ffa534', '#fb404b', '#ff9510', '#cc2127', '#248cc9' ,'#4ec6f8']
      }
    }
  }
</script>
<style lang="scss" scoped>
.title {
  text-transform: uppercase;
}
</style>
