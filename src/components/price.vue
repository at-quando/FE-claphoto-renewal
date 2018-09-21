<template>
  <div class="price">
    <section class="cp_price-section">
      <div class="container">
        <div class="cp-heading-holder">
          <h3>{{this.$route.query.title}} Prices </h3>
          <p>Bảng giá {{this.$route.query.title}}</p>
        </div>
        <h4 class="title-price">CHỈ CẦN ĐĂNG KÝ CHỤP VÀ THUÊ TRANG PHỤC BẠN SẼ ĐƯỢC</h4>
        <div class="gift-row row">
          <gift class="col-md-4" :icon="'fa-gift'" :content="item" :keyword="'FREE'" v-for="(item, index) of giftPhoto" :key="index"/>
        </div>
        <h4 class="title-price">GẤP ĐÔI QUÀ TẶNG HƠN NỮA!!!!</h4>
        <div class="gift-row row">
          <gift class="col-md-4" :icon="'fa-gift'" :content="item.content" :keyword="item.keyword" v-for="(item, index) of giftCam" :key="index"/>
        </div>
        <h4 class="title-price">VẪN CÒN RẤT NHIỀU KHUYẾN MÃI BẤT NGỜ ĐANG CHỜ QUÝ KHÁCH BOOK LỊCH</h4>
        <div class="row">
          <div class="col-md-4 col-sm-4" v-for="(item, index) of prices" :key ="index">
            <price-item :price="item"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as types from '../store/types'

export default {
  name: 'Price',
  data () {
    return {
      giftPhoto: [
        'Hoa cầm tay và hoa đội đầu cho cả lớp',
        'Cà vạt cho tất cả các bạn nam',
        'Máy bay giấy màu cho cả lớp phi tẹt bô',
        '3kg bột màu chơi mệt nghỉ',
        'Loa thùng quẩy tẹt ga khi chơi bột màu',
        'Khói màu cho các lớp chơi bột màu',
        'Mỗi bạn 2 ảnh 13×18 in chất lượng cao',
        'Gói thiết kế photobook trị giá 2.000.000đ',
        'Flycam chụp hình cho các lớp đăng ký sớm và trên 50 người.'
      ],
      giftCam: [
        {keyword:'TẶNG NGAY', content:'gói Flycam và bóng bay khi book lịch'},
        {keyword:'CAM ĐOAN', content:'trả ảnh trong vòng 3-5 ngày'},
        {keyword:'MIỄN PHÍ', content:'sử dụng hệ thống ảnh fullHD'},
        {keyword:'TẶNG NGAY', content:'2.000.000đ khi sử dụng gói quay phim'},
        {keyword:'Không giới hạn', content:'số lượng file ảnh trong ngày chụp'},
        {keyword:'Không giới hạn', content:'Địa điểm chụp hình trong thời gian chụp'},
        {keyword:'Chỉnh sửa', content:'Toàn bộ file chụp trong buổi chụp, trả toàn ảnh bộ đã qua chỉnh sửa'},
        {keyword:'Tư vấn', content:'Concept chụp ảnh kỷ yếu độc nhất vô nhị'}
      ],
      prices: []
    }
  },
  created () {
    this.$http.get(types.LIST_PRICE).then(res => {
      this.prices = res.body
      this.prices = this.prices.filter(x => x.aspect == parseInt(this.$route.query.type))
      console.log(this.prices)
    })
  }
 
}
</script>
<style>
.gift-row {
  margin-right: -30px;
  margin-left: 30px;
  padding-bottom: 10px;
}
.title-price {
  padding: 20px 0;
}
</style>
