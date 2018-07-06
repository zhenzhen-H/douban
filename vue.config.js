module.exports = {
  devServer: {
    proxy: {
      // '/v2': {
      //   target: 'https://api.douban.com',
      //   changeOrigin: true
      // },
      '/v2': {
        target: 'http://localhost:9000',
        changeOrigin: true
      }
    }
  }
}
