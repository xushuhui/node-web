const Koa = require("koa")
const parser = require('koa-bodyparser')
const path = require('path')
const InitManager = require('./core/init')
//const CatchError  = require('./middlewares/catchError')
const catchError = require('./middlewares/exception')
const static = require('koa-static')
const app = new Koa()
app.use(parser())
app.use(static(path.join(__dirname,'./static')))
app.use(catchError)
InitManager.initCore(app)

  
  
app.listen(3000)
