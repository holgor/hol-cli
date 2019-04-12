
module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'vue-awesome-swiper': '^3.1.3'
    }
  })

  api.render('./template')
}
