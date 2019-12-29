const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,

      // 設定を記述
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    config.node = {
      fs: 'empty'
    }

    return config
  }
}