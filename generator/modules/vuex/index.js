module.exports = (api, options, version) => {
  api.injectImports(api.entryFile, `import store from './store'`)
  api.injectRootOptions(api.entryFile, `store`)
  api.extendPackage({
    dependencies: {
      vuex: version
    }
  })
  api.render('./template')
}
