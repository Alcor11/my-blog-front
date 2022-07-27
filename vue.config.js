module.exports = {
    // baseURL: 'http://localhost:8088/',
    devServer: {
        host: "localhost",
        port: 8888,
        proxy: {
            '/api': {
                target: 'http://localhost:8088/',
                changeOrigin: true
                // ws: true,
                // rewrite: (pathStr) => pathStr.replace('/api', '')
            },
        },
    },
    lintOnSave: false
}
