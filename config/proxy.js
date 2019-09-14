/**
 * create by yanle
 * create time 2019-09-13 21:22
 */


module.exports = {
  mock: {
    context: ['/api/', '/api/demo'],
    target: '',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/',
    },
    logLevel: 'debug',
  },
};
