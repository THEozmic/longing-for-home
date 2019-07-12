module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(vtt)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        }
      ]
    }
  }
};
