//esqueleto do meme
//configura os campos que o meme possui e seus tipos
const mongoose = require('mongoose')

const MemesSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Meme', MemesSchema)