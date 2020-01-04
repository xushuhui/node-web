const requireDirectory = require("require-directory")
const Router = require("koa-router")
const fs = require('fs')
class InitManager {
    static initCore(app) {
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.loadHttpException()
        InitManager.loadConfig()
    }

    static loadConfig(path = '') {
        const env = fs.readFileSync(process.cwd() + '/.env', 'utf8')
        const configPath = path || process.cwd() + '/config/config-' + env + '.js'
        global.config = require(configPath)
        global.config.env = env
    }
    static initLoadRouters() {
        const apiDir = `${process.cwd()}/routes`
        requireDirectory(module, apiDir, {
            visit: (obj) => {
                if (obj instanceof Router) {
                    InitManager.app.use(obj.routes())
                }
            }
        })

    }
    static loadHttpException() {

        global.errs = require('./http-exception')
    }
}

module.exports = InitManager