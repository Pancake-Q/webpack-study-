const path = require('path');
const { ProgressPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const HtmlPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlPlugin({
    template: './public/index.html',
    chunks: ['app'],
});

const progressPlugin = new ProgressPlugin({
    // activeModules: false, //显示活动模块计数和一个活动模块正在进行的消息
    entries: true, // 显示正在进行的入口文件计数消息。
    // handler(percentage, message, ...args) {
    //   custom logic
    // }, // 可以自定义行为的函数
    modules: true, //显示正在进行的模块计数消息。
    // modulesCount: 5000, //开始时的最小模块数。modules启用属性时生效。
    // profile: false, //告诉ProgressPlugin为进度步骤收集配置文件数据。
    dependencies: true, //显示正在进行的依赖项计数消息。
    // dependenciesCount: 10000, //开始时的最小依赖项计数。dependencies启用属性时生效。
    // percentBy: null, //说明如何计算进度百分比。
});

const miniCssExtractPlugin = new MiniCssExtractPlugin();

module.exports = {
    // entry: "./src/index.tsx",
    entry: {
        // commonbundle: ['lodash', 'react'],
        // "643": ['react-dom'],
        app: {
            import: './src/index.tsx',
        },
        // pageOthers: {
        //     import: "./src/pages/Fenlei/index.tsx",
        // }
        // app: "./src/index.tsx",
        // pageOthers: "./src/pages/Fenlei/index.tsx"
        // pageOthers: {
        //     import: "./src/pages/Fenlei/index.tsx",
        //     // dependOn: "lodashBundle",
        // },
        // lodashBundle: ['lodash'],
    },
    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: 'bundle-[name]-[hash:6].js',
        clean: true,
        library: {
            type: 'commonjs',
        },
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.mjs', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
            {
                test: /\.(js|jsx|mjs|tsx|ts)$/,
                use: ['babel-loader', 'ts-loader'],
                // exclude: [/node_modules/, /public/],
            },
        ],
    },
    // 优化
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            // `...`,
            new CssMinimizerPlugin(),
        ],
        // 启用公用模块自动抽离优化
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [htmlPlugin, miniCssExtractPlugin, progressPlugin],
};
