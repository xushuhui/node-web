const Koa = require("koa")
const axios = require("axios")
const app = new Koa()

app.use(async (ctx,next)=>{
    const res = await axios.get("http://www.baidu.com")
    console.log(res);
     
})

app.listen(3000)
