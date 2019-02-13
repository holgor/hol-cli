module.exports = (api, options = {}) => {
  api.injectImports(api.entryFile, `import 'lib-flexible' // flexible响应式布局`)
  api.extendPackage({
    dependencies: {
      'lib-flexible': '^0.3.2'
    },
    devDependencies: {
      'postcss-pxtorem': '^4.0.1'
    },
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 75,
          propList: ['*'],
          selectorBlackList: []
        }
      }
    }
  })
}
