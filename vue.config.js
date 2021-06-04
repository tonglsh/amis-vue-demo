module.exports = {
  lintOnSave: true,
  publicPath: '/',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
      filename: 'index.html',
      title: 'amis演示'
    }
  },
  devServer: {
    port: '8099'
  }
}
