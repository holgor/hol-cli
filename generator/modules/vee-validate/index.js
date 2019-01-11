
module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'vee-validate': '^2.1.5'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/vee-validate.js' // 引入vee-validate校验表单`)
  api.render('./template')
}
