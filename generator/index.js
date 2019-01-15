module.exports = (api, options, rootOptions) => {
  console.log(options)
  // 根据选择安装router并建立模板
  if (options.plugins.indexOf('router') !== -1) {
    require('./modules/router')(api, options, '^3.0.1')
  }

  // 根据选择安装vuex并建立模板
  if (options.plugins.indexOf('vuex') !== -1) {
    require('./modules/vuex')(api, options, '^3.0.1')
  }

  // // 根据选择安装css默认样式
  // if (options.cssReset) {
  //   const deps = {
  //     resetCss: {
  //       'reset-css' : '^4.0.1'
  //     },
  //     normalizeCss: {
  //       'normalize.css': '^2.1.2'
  //     }
  //   }

  //   api.extendPackage({
  //     devDependencies: deps[options.cssReset]
  //   })
  // }

  // 根据选择安装css预处理器
  if (options.cssPreprocessor) {
    const deps = {
      sass: {
        'node-sass': '^4.9.0',
        'sass-loader': '^7.0.1'
      },
      less: {
        less: '^3.0.4',
        'less-loader': '^4.1.0'
      },
      stylus: {
        stylus: '^0.54.5',
        'stylus-loader': '^3.0.2'
      }
    }

    api.extendPackage({
      devDependencies: deps[options.cssPreprocessor]
    })
  }

  // 使用cookies处理权限token
  if (options.plugins.indexOf('cookies+token') !== -1) {
    require('./modules/cookiesToken')(api, options)
  }

  // qs + axios http请求框架
  if (options.plugins.indexOf('qs+axios') !== -1) {
    require('./modules/qsAxios')(api, options)
  }

  // lib-flexible + px2rem 手机端适配布局
  if (options.plugins.indexOf('lib-flexible+postcss-pxtorem') !== -1) {
    require('./modules/flexibleRem')(api, options)
  }
  
  // fastclick 移动端点击
  if (options.plugins.indexOf('fastclick') !== -1) {
    require('./modules/fastclick')(api, options)
  }

  // vee-validate
  if (options.plugins.indexOf('vee-validate') !== -1) {
    require('./modules/vee-validate')(api, options)
  }

  // 常用依赖
  if (options.dependencies.length > 0) {
    let dependencies = {}
    options.dependencies.forEach(dep => {
      dependencies[dep.name] = dep.version
    })
    api.extendPackage({
      dependencies
    })
  }
  // 默认模板
  require('./modules/default')(api, options)
}
