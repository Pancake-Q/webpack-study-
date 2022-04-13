/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-25 14:43:54
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-25 15:00:03
 * @FilePath: /webpack-study/Users/wxy/codeWorks/webpack-s/config/webpack.dev.js
 * @Description: update here
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        proxy: {
            // ..todo
        },
    },
});
