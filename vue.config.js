module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://m.aihuishou.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
