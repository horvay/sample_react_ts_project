module.exports = {
    entry: './scripts/app/App.tsx',
    output: {
        filename: 'scripts/app/bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader',
            }
        ]
    }
}