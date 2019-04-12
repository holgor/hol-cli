<template>
  <div>
    <swiper
      class="notice-swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="(item,index) in 10"
        :key="index"
      >
        <div class="swiper-item-wrapper">{{index}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// 更多swiper配置，可见文档 https://www.swiper.com.cn/
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        disableOnInteraction: false,
        loop: true
      }
    }
  }

}
</script>
<style scoped>
.swiper-item-wrapper{
  background-color: aquamarine;
  font-size: 50px;
  line-height: 500px;
  width: 100%;
  height: 500px;
}
</style>

