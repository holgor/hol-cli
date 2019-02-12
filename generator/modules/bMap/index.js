module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'vue-baidu-map': '^0.21.16'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/bMap' // 引入百度地图`)
  api.render('./template')
}