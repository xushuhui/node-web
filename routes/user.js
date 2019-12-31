const Router = require("koa-router")
const router = new Router()
const User = require('../app/controllers/user')
const userApi = new User()
router.get("/user",(ctx,next)=>{
    ctx.body = userApi.getUser()
})
module.exports = router