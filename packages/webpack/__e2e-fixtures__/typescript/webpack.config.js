const webpack = require('../../index')

// Need to write it like this instead of destructuring so it runs on Node 4.x w/o transpiling
const defineConstants = webpack.defineConstants
const createConfig = webpack.createConfig
const entryPoint = webpack.entryPoint
const performance = webpack.performance
const setOutput = webpack.setOutput

const typescript = require('@webpack-blocks/typescript')
const tslint = require('@webpack-blocks/tslint')
const path = require('path')

module.exports = createConfig([
  entryPoint(
    path.join(__dirname, 'app.ts')
  ),
  setOutput(
    path.join(__dirname, 'build/bundle.js')
  ),
  typescript(),
  tslint({
    emitErrors: true
  }),
  performance({
    maxAssetSize: 100000,
    maxEntrypointSize: 500000,
    hints: 'error'
  }),
  defineConstants({
    'process.env.TEST': 'This is the injected process.env.TEST!'
  })
])
