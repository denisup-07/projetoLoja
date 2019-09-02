const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080/api/v1',
      pathRewrite: {'^/api' : ''}
    }
  ];module.exports = proxy;
  