module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      axios: '^0.18.0',
      qs: '^6.6.0'
    }
  })
  api.render('./template', {
    cookiesToken: options.plugins.indexOf('cookies+token') !== -1
  })
}
