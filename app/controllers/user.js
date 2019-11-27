const Router = require("koa-router")
const router = new Router()

router.get('/v1/user',(ctx,next)=>{
    ctx.body = {
        key:"user"
    }
})
module.exports = router