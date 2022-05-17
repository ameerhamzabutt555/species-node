const express = require('express')
var createError = require('http-errors')
const cors = require('cors')
var path = require('path')
var cookieParser = require('cookie-parser')
var indexRouter = require('./routes/index')
require('dotenv').config()
require('./database/config')
const app = express()

var fs = require('fs');
var bodyParser = require('body-parser');

app.use(cors())
app.use(cookieParser())
app.use(express.json({ limit: '50mb' }))
app.set('views', path.join(__dirname, 'views'))
//app.use(express.static(__dirname + '/public'));
//app.use('/uploads', express.static('uploads'));
const dirpath = path.join(__dirname, 'uploads')
app.use(express.static('uploads'));
app.use('/uploads', express.static(dirpath))
app.set('view engine', 'ejs')
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
)



app.use(express.json())
app.use(bodyParser.json())
app.use('/v1', indexRouter)
app.use('*', (req, res) => {
  res.send('WELCOME TO SOO ZOO WATER PARK...😍😍😍')
})
app.use(function (req, res, next) {
  next(createError(404))
})

const PORT = process.env.PORT || 4111
const IP = process.env.IP || 'localhost'

app.listen(PORT, IP, console.log(`Server has started at http://${IP}:${PORT} `))
module.exports = app
