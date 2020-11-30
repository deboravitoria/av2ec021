const restify = require ('restify')
const server = restify.createServer()
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const apiRoutes = require('./routes/apiV1')

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
  dbName: 'ec021_av_2_aulas'
}

mongoose.connect('mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority', dbConfig)

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

authRoutes.applyRoutes(server, '')
apiRoutes.applyRoutes(server, '/apiv1')

const port = process.env.PORT | 5000
server.listen(5000, function(){
  console.log('Server started. Port: ' + port)
})