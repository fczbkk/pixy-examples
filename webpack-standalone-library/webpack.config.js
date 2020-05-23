const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'build'),
    library: 'someLibrary',
    libraryTarget: 'umd'
  }
}
