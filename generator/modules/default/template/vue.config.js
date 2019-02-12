module.exports = {
  publicPath: './',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9527, // 端口
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        // 要访问的api的域名  可破跨域问题
        target: ' https://localhost/',
        ws: false,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }, // 设置代理
    before: app => {}
  },
  <%_ if (useEcharts) { _%>
  transpileDependencies: [ // 可能会遇到默认配置把 node_modules 中的文件排除在 Babel转译范围以外的问题。需要把vue-echarts 及 resize-detector加入transpileDependencies
    'vue-echarts',
    'resize-detector'
  ],
  <%_ } _%>
  chainWebpack: config => {}
}