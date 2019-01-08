module.exports = (api, options = {}, version) => {
  api.injectImports(api.entryFile, `import router from './router'`)
  api.injectRootOptions(api.entryFile, `router`)
  api.extendPackage({
    dependencies: {
      'vue-router': version
    }
  })
  api.render('./template', {
    historyMode: options.routerHistoryMode,
    doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript')
  })

  api.postProcessFiles(files => {
    const appFile = files[`src/App.vue`]
    if (appFile) {
      files[`src/App.vue`] = appFile.replace(
        /^<template>[^]+<\/script>/,
        `
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
        `.trim()
      )
    }
  })

}
