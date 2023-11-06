module.exports = {
    mode: "development",
    entry: {
        alpha: "./src/alpha.jsx",
        blink: "./src/blink.jsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/src/main/webapp/js/react"
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
        ]
    },
};
