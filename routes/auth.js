//rota de validação de tokem
const Router = require('restify-router').Router
const AuthController = require('../controller/auth')
const routerInstance = new Router()

routerInstance.add('/auth', AuthController)

module.exports = routerInstance