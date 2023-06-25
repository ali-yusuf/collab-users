module.exports = {
    // ...
    module: {
        rules: [
            // ...
            {
                test: /\.pdf$/,
                use: [{
                    loader: 'pdf-loader',
                }, ],
            },
        ],
    },
};