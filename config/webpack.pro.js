const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const bundleAnalyzer = new BundleAnalyzerPlugin();

module.exports = merge(common, {
    mode: 'production',
    plugins: [bundleAnalyzer],
});
