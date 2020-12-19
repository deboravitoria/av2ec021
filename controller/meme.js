//CRUD do meme
const Router = require('restify-router').Router
const MemeModel = require('../models/meme')
const routerInstance = new Router()
const AuthMid = require('../middleware/validToken')

//em caso de erro todas as requisições retornam erro 500, internal serverr error

//verifica se o token do usuario é valido e lista todos os memes
routerInstance.get( '', AuthMid.isValidToken, async( req, res ) => {
  try{
    const memes = await MemeModel.get(req.params.id)
    res.json(200, memes)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})
//verifica se o token do usuario é valido e lista o meme com o id especificado
routerInstance.get( '/:id', AuthMid.isValidToken, async( req, res ) => {
  try{
    const memes = await MemeModel.get(req.params.id)
    res.json(200, memes)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})
//verifica se o token do usuario é valido e envia um meme novo do body
routerInstance.post( '', AuthMid.isValidToken, async( req, res ) => {
  try{
    const newMeme = await MemeModel.create(req.body)
    res.json(200, newMeme)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})
//verifica se o token do usuario é valido e edita o meme de id especificado
routerInstance.patch('/:id', AuthMid.isValidToken, async(req,res)=>{
  try{
    const editedMeme = await MemeModel.edit(req.params.id, req.body)
    res.json(200, editedMeme)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})
//verifica se o token do usuario é valido e remove o meme de id especificado
routerInstance.del('/:id', AuthMid.isValidToken, async(req,res)=>{
  try{
    MemeModel.del(req.params.id)
    res.send(200)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})

module.exports = routerInstance