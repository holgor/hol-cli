module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'vue-amap': '^0.5.8'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/aMap' // 引入高德地图`)
  api.render('./template')
}