const Router = require('restify-router').Router
const AuthModel = require('../models/auth')

const routerInstance = new Router()

routerInstance.post( '/login', async( req, res ) => {
  const { body } = req
  try {
    const result = await AuthModel.login( body.username, body.password ) 
    res.json(200, result)
  
  } catch(err){
    res.send(err.response.status, err.response.data)
  }
})

module.exports = routerInstance