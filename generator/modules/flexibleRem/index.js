module.exports = (api, options = {}) => {
  api.injectImports(api.entryFile, `import 'lib-flexible'`)
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
