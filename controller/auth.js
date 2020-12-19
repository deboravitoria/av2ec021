//configura o login e as respostas http em caso de sucesso, sem autorização e acesso negado
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
    //Abriu
    if(!username || !password){
      return res.send(401)//unauthorized
    }
    //Fechou
  }
  //Comecei aqui
  validateToken: (req, res, next) =>{
    let token = req.headers.token;

    if(token){
      return res.send(403); //Forbidden
    }
    next();
  }
})
//terminei aqui
module.exports = routerInstance

