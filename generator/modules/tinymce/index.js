module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'tinymce': '^5.0.0',
      '@tinymce/tinymce-vue': '^2.0.0'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/tinymce' // 引入tinymce富文本编辑器`)
  api.render('./template')
}