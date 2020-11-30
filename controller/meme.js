const Router = require('restify-router').Router
const MemeModel = require('../models/meme')
const routerInstance = new Router()
const AuthMid = require('../middleware/validToken')

routerInstance.get( '', AuthMid.isValidToken, async( req, res ) => {
  try{
    const memes = await MemeModel.get(req.params.id)
    res.json(200, memes)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})

routerInstance.get( '/:id', AuthMid.isValidToken, async( req, res ) => {
  try{
    const memes = await MemeModel.get(req.params.id)
    res.json(200, memes)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})

routerInstance.post( '', AuthMid.isValidToken, async( req, res ) => {
  try{
    const newMeme = await MemeModel.create(req.body)
    res.json(200, newMeme)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})

routerInstance.patch('/:id', AuthMid.isValidToken, async(req,res)=>{
  try{
    const editedMeme = await MemeModel.edit(req.params.id, req.body)
    res.json(200, editedMeme)
  } catch(err){
    console.log(err)
    res.send(500)
  }
})

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