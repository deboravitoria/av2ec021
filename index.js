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

mongoose.connect(DB_URL, dbConfig)   //conectando com o banco do professor

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

authRoutes.applyRoutes(server, '')
apiRoutes.applyRoutes(server, '/apiv1')

const port = process.env.PORT | 5000
server.listen(5000, function(){
  console.log('Server started. Port: ' + port)
})