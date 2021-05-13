const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        //  全局引入变量和mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before (app) {
      registerRouter(app)
    }
  }
}
