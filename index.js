require('dotenv').config()  //biblioteca para usar o arquivo .env
const restify = require ('restify')
const server = restify.createServer()
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const apiRoutes = require('./routes/apiV1')
const DB_URL = process.env.DB_URL

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
  dbName: process.env.DB_NAME
}
//conectando com o banco do professor
mongoose.connect(DB_URL, dbConfig, function(error){
  if(!error){
    console.log('MongoDB conectado');
  }else{
    console.log('Erro ao conectar ao MongoDB: $(error)');
  }
})   

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

authRoutes.applyRoutes(server, '')
apiRoutes.applyRoutes(server, '/apiv1')

server.listen(process.env.PORTA, function(){
  console.log('Server rodando. Porta: ' + process.env.PORTA)
})