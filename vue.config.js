module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://ecommerce-test-server.herokuapp.com/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
};
