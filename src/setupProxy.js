const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://192.168.152.55:6666',
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }))
}