// webpack.config.js
module.exports = {
  // devtool: 'eval-source-map',
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
  },
  // devServer: {
  //   contentBase: '', // 本地服务器所加载的页面所在的目录
  //   colors: true, // 终端中输出结果为彩色
  //   historyApiFallback: true, // 不跳转
  //   inline: true, // 实时刷新
  // },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
};
