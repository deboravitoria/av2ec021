const AuthModel = require('../models/auth')

async function isValidToken(req, res, next){
  const {token} = req.headers

  if(token){
    try{
      await AuthModel.validate(req.headers.token)
      return next()  
    } catch(err){
      if(err.response.status === 401){
        return res.json(401, {msg: 'Token inválido!'}) 
      } else{
        return res.json(500, {msg: 'Ocorreu um erro interno do servidor.'})
      }
    }
  }

  res.json(403, {msg: 'O token não foi fornecido.'})
}

module.exports = {isValidToken}