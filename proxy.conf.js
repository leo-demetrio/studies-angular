const PROXY_CONFIG =  [
    {
        context: ['/api'],
        target: "http://localhost:8080/api/v1/products",
        pathRewrite: { '^/api': '' }
    }
];

module.exports = PROXY_CONFIG;