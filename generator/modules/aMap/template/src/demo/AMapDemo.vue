<template>
  <el-amap
    class="demo-map"
    :zoom="zoom"
    :amap-manager="amapManager"
    :center="center"
  >
  </el-amap>
</template>

<script>
// AMapDemo 具体参考 https://elemefe.github.io/vue-amap
import VueAMap from 'vue-amap'

let amapManager = new VueAMap.AMapManager()
export default {
  data () {
    return {
      zoom: 17,
      center: [113.309533, 23.13327],
      amapManager
    }
  },
  mounted () {
    // 使用AMapManager可获取地图对象
    console.log(amapManager._componentMap);
    console.log(amapManager._map);
  }
}
</script>

<style scoped>
.demo-map {
  width: 300px;
  height: 300px;
}
</style>