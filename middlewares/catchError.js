const catchError = async(ctx,next)=>{
    try {
        await next()
    } catch (error) {
        ctx.body = "服务器出问题了"
    }
}
module.exports = catchError