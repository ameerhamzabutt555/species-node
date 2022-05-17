var express = require('express')
const productRoutes = require('./product')
const routes = express.Router()

routes.use('/product', productRoutes)
module.exports = routes
