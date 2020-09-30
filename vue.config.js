const webpack = require('webpack');

module.exports = {
  configureWebpack: () => ({
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          LOGGER_LEVEL: JSON.stringify('info'),
        },
      }),
    ],
  }),
};
