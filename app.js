const Koa = require("koa")
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const CatchError  = require('./middlewares/catchError')
const app = new Koa()
app.use(parser())
app.use(CatchError)
InitManager.initCore(app)

  
  
app.listen(3000)
