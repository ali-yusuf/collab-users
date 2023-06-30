module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/collab-users/' : '/',
    devServer: {
        base: '/collab-users',
        proxy: {
            '^/api': {
                target: 'http://localhost:2000',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
};