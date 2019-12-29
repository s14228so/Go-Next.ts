const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.pluginsundefined

      // Read the .env file
      new Dotenv({
        path: path.join(__dirnameundefined '.env')undefined
        systemvars: true
      })
    ]

    return config
  }
}
