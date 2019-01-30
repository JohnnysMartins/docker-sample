const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose


mongoose.Promise = global.Promise
mongoose.connect('mongodb://mongodb/mydb')

server.get('/', (req, res, next) => {
  res.send('backend')
})


server.listen(3000)