module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-stock-trader/" : "/",
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false
    }
  },
  transpileDependencies: ["quasar"]
};
