module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'js-cookie': '^2.2.0'
    }
  })
  api.render('./template')
}
