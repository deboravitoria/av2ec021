//model do crud
const MemeModel = require('../schemas/meme') //carrega o esqueleto do meme

async function get(id){
  if(id){
    const meme = await MemeModel.findById(id) //lista o meme com o id especificado
    return meme
  } else{
    const memes = await MemeModel.find() //lista todos os memes
    return memes
  }
}

async function create(newMeme) {
  const meme = await MemeModel.create(newMeme) //cria meme
  return meme
}

async function edit(id, editedMeme){
  const meme = await MemeModel.findByIdAndUpdate(id, editedMeme, {new: true, runValidators: true}) //edita o meme
  return meme
}

async function del(id){
  await MemeModel.findByIdAndDelete(id) //remove o meme do id especificado
}

module.exports = {create, edit, get, del}