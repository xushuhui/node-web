const requireDirectory = require("require-directory")
const Router = require("koa-router")
class InitManager {
    static initCore(app) {
        InitManager.app = app
        InitManager.initLoadRouters()
    }

    static initLoadRouters() {
        const apiDir = `${process.cwd()}/app/controllers`
        requireDirectory(module,apiDir, {
            visit: (obj) => {
                if (obj instanceof Router) {
                    InitManager.app.use(obj.routes())
                }
            }
        })
    }
}

module.exports = InitManager