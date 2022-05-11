module.exports = {
    module: {
        rules: [
            {
                // entry: ['babel-polyfill'],
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}