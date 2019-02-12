module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'echarts': '^4.1.0',
      'vue-echarts': '^4.0.1'
    }
  })

  api.render('./template')
}