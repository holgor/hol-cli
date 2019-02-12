
module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'element-ui': '^2.5.4'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/element-ui' // 引入element-ui组件库`)
  api.render('./template')
}
