const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const resolve = p => path.resolve(__dirname, p);

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: '../dist',
    compress: true,
    port: 9000,
    open: true
  },
  plugins: [
    // 从 webpack v4 开始, 指定 mode 会自动地配置 DefinePlugin
    // new DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('development')
    // }),
    new HotModuleReplacementPlugin()
  ]
})