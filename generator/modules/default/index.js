module.exports = (api, options = {}) => {
  api.extendPackage({
    scripts: {
      'build:testing': 'vue-cli-service build --mode testing',
      'build:prod': 'vue-cli-service build --mode prod'
    },
    dependencies: {
      'babel-polyfill': '^6.26.0'
    }
  })

  api.injectImports(api.entryFile, `import 'babel-polyfill' // 引入babel-polyfill解决浏览器es6+支持问题`)

  api.postProcessFiles(files => {
    const appFile = files[`public/index.html`]
    if (appFile) {
      // 增加加meta 无法缩放、浏览器主题色
      files[`public/index.html`] = appFile.replace(
        /<meta name="viewport"[^>]*>/,
        `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<meta name="theme-color" content="#0B0B0B">`.trim()
      )
    }
  })

  api.render('./template', {
    useEcharts: options.plugins.indexOf('echarts') !== -1
  })
}