
module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'fastclick': '^1.0.6'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/fastclick' // 引入fastclick解决移动端点击延迟问题`)
  api.render('./template')
}
