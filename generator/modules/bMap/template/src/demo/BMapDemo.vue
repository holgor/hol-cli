<template>
  <baidu-map
    class="demo-map"
    :center="center"
    :zoom="zoom"
    @ready="handler"
  ></baidu-map>
</template>

<script>
// BMapDemo 具体参考 https://dafrok.github.io/vue-baidu-map
export default {
  data () {
    return {
      zoom: 17,
      center: { lng: 113.315923, lat: 23.138504 }
    }
  },
  methods: {
    handler ({ BMap, map }) {
      // 使用ready事件可获取地图对象
      console.log(BMap, map)
    }
  }
}
</script>

<style scoped>
.demo-map {
  width: 300px;
  height: 300px;
}
</style>