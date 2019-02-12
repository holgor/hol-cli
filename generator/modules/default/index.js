module.exports = (api, options = {}) => {
  api.extendPackage({
    scripts: {
      'build:test': 'vue-cli-service build --mode test',
      'build:prod': 'vue-cli-service build --mode prod'
    }
  })

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