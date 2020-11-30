const MemeModel = require('../schemas/meme')

async function get(id){
  if(id){
    const meme = await MemeModel.findById(id)
    return meme
  } else{
    const memes = await MemeModel.find()
    return memes
  }
}

async function create(newMeme) {
  const meme = await MemeModel.create(newMeme)
  return meme
}

async function edit(id, editedMeme){
  const meme = await MemeModel.findByIdAndUpdate(id, editedMeme, {new: true, runValidators: true})
  return meme
}

async function del(id){
  await MemeModel.findByIdAndDelete(id)
}

module.exports = {create, edit, get, del}