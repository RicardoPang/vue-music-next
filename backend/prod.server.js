const express = require('express')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const registerRouter = require('./router')

const port = process.env.PORT || 9002

const app = express()

app.use(cookieParser())

// 代理自己写的接口
registerRouter(app)

app.use(compression())

// 静态资源目录
app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
