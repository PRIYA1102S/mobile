const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://d3398n96t5wqx9.cloudfront.net',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
            headers: {
                'x-api-key': 'FtmJ7frzTyWOzintybbqIWzwwclcPtaI',
                'Authorization': 'Bearer 0e186445-0647-417c-ae27-8098533f1914',
            }
        })
    );
};
