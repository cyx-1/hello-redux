const {
    join
} = require("path"),
    webpack = require("webpack");
BUILD_DIR = join(__dirname, "build")

module.exports = {
    entry: join(__dirname, "index.js"),
    target: "node",
    devtool: "source-map",
    output: {
        path: BUILD_DIR,
        filename: "index.js"
    },
    module: {
        rules: [{
            test: /.js?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["node6"],
                    plugins: ["transform-object-rest-spread"]
                }
            }]
        }]
    }
};