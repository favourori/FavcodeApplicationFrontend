module.exports = {
  devServer: {
    proxy: "http://localhost:4000",
    disableHostCheck: true
  },

  baseUrl: '',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
};
