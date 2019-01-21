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
  chainWebpack: config => {}
}
