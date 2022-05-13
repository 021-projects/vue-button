/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  css: {
    extract: false,
    sourceMap: false
  },

  productionSourceMap: false,

  configureWebpack: {
    output: {
      library: 'VueButton'
    },
    module: {
      rules: [
        {
          type: 'javascript/auto',
          test: /\.mjs$/,
          use: 'babel-loader'
        }
      ]
    },
    optimization: {
      minimize: true
    }
  }
}