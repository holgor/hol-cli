<template>
  <v-chart
    class="demo-chart"
    ref="chart"
    :options="options"
  ></v-chart>
</template>

<script>
// echarts Demo 熟悉后可以删除此组件
import ECharts from 'vue-echarts'
// 整体引入echarts
import 'echarts'

// or 部分引入 减少bundle体积
// import 'echarts/lib/chart/bar'
export default {
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      options: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
    }
  },
  mounted () {
    // 使用ref可获取echarts对象
    console.log(this.$refs['chart'])
  }
}
</script>

<style scoped>
.demo-chart {
  width: 300px;
  height: 300px;
}
</style>