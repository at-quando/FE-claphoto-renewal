<template>
  <div class="video">
    <div id="cp-content-wrap" style="margin-top: -80px;" class="cp-content-wrap">
      <div class="container">
        <div class="row">
          <h2 class="align-center">BẢNG GIÁ TRANG PHỤC</h2>
          <p class="align-center">Costume Price</p>
          <ul class="cp-extended-gallery gallery">
            <li class="col-md-4 clothes-item" v-for="(item,index) of clothes" :key="index">
              <figure class="cp-gallery-thumb">
                <div class="price-label">
                  <div class="main-back"><span><b class="from">VND</b> <b class="money">{{item.hire}}K</b>/bộ</span></div>
                  <div class="special-back" :style="{'background-color': colorArr[Math.floor(Math.random()*colorArr.length)]}"><span>SPECIAL OFFER</span></div>
                </div>
                <img v-if="item.images[0]" :src="item.images[0].name.url |takeImage"  alt="" />
                <router-link tag="a" :to="{name: 'ClothesDetails', params: {id: item.id}}">
                  <figcaption class="cp-box-fig">
                    <div class="cp-zoom"><i class="fa fa-search"></i></div> 
                  </figcaption>
                </router-link>
              </figure>
              <div class="cp-gallery-content">
                <h3 class="title-custom">{{item.name}}</h3>
                <ul class="cp-post-meta">
                  <li><a href="#">{{item.description}}</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'Clothes',
  data () {
    return {
      clothes: [],
      colorArr: ['#f2852b', '#e91e5f', '#2583c5', '#99509f', '#66b446']
    }
  },
  created () {
    this.$http.get(types.LIST_CLOTHES).then(res => {
      this.clothes = res.body
      console.log(this.clothes)
      this.result = true
    })
  },
  updated() {
    if ($('.gallery').length) {
      $("area[data-rel^='prettyPhoto']").prettyPhoto();
      $(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed:'normal',
        theme:'light_square',
        slideshow:3000, 
        autoplay_slideshow: false
      });
    }
  }
}
</script>
<style lang="scss">
.price-label {
  width: 115px;
  position: absolute;
  top: 0;
  left:-10px;
  -ms-transform: rotate(-20deg); /* IE 9 */
  -webkit-transform: rotate(-20deg); /* Safari */
  transform: rotate(-20deg);
}
.main-back {
  height: 34px;
  position: relative;
  background-color: #35373a;
  border-radius: 7px 0 7px 5px;
  span {
    padding: 0 5px;
    color: white;
    .from {
      position: absolute;
    }
  }
}

.special-back {
  display: inline-block;
  border-radius: 10px 0 0 10px;
  span {
    padding: 5px;
    color: white;
  }
}
.title-custom {
  color: rgba(0,0,0,0.8) !important;
}
.clothes-item{
  margin-bottom: 30px;
}
.cp-box-fig {
  position: relative;
}
.cp-zoom {
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}
</style>
