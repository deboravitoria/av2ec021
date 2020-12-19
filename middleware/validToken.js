//validação do token do usuário para realizar as operações
const AuthModel = require('../models/auth')

async function isValidToken(req, res, next){
  const {token} = req.headers

  if(token){
    try{
      await AuthModel.validate(req.headers.token)
      return next()  
    } catch(err){
      //caso o token esteja incompleto ou nao possua autorização, é retornado status 401
      if(err.response.status === 401){
        return res.json(401, {msg: 'Token inválido!'}) 
      } else{
        //erro default caso o token nao cumpra nenhuma condição anterior a respostave ser internal server error
        return res.json(500, {msg: 'Ocorreu um erro interno do servidor.'})
      }
    }
  }
//caso o token apenas nao seja fornecido, é retornado status 403, acesso negado
  res.json(403, {msg: 'O token não foi fornecido.'})
}

module.exports = {isValidToken}