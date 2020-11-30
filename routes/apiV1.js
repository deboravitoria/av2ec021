const Router = require('restify-router').Router
const MemeController = require('../controller/meme')

const routerInstance = new Router()

routerInstance.add('/meme', MemeController)

module.exports = routerInstance