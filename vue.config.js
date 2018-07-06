module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: 'https://douban.uieee.com',
        changeOrigin: true
      },
      // '/v2': {
      //   target: 'http://localhost:9000',
      //   changeOrigin: true
      // }
    }
  }
}
