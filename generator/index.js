const addPluginList = (pluginList, api, options) => {
  for (const key in pluginList) {
    require(`./modules/${pluginList[key]}`)(api, options)
  }
}

module.exports = (api, options, rootOptions) => {
  console.log(options)
  // 根据选择安装css预处理器
  if (options.cssPreprocessor) {
    const deps = {
      sass: {
        'node-sass': '^4.12.0',
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

  // // 根据选择安装css默认样式
  if (options.cssReset === 'resetCss') {
    api.extendPackage({
      devDependencies: {
        'reset-css': '^4.0.1'
      }
    })
    api.injectImports(api.entryFile, `import 'reset-css' // 引入reset-css`)
  } else if (options.cssReset === 'normalizeCss') {
    api.extendPackage({
      devDependencies: {
        'normalize.css': '^8.0.1'
      }
    })
    api.injectImports(
      api.entryFile,
      `import 'normalize.css' // 引入normalize.css`
    )
  }

  // 已选择的公共插件
  addPluginList(options.plugins, api, options)

  if (options.runtimeConsole === 'mobile') {
    // 已选择的移动端项目插件
    addPluginList(options.mobliePlugins, api, options)
  } else if (options.runtimeConsole === 'PC') {
    // 已选择的PC端项目插件
    addPluginList(options.PCPlugins, api, options)
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
