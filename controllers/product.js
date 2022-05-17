const { productServices } = require('../service')
const { setResponse } = require('../helpers')
const multer = require('multer');





const create = async (req, res) => {
  try {

    const data = await productServices.create(req)
    setResponse(res, data)
  } catch (error) {
    console.log('Error ', error)
    setResponse(res, { type: 'serverError' })
  }
}

const allProducts = async (req, res) => {
  try {
    const data = await productServices.allProducts(req)
    console.log(data)
    setResponse(res, data)
  } catch (error) {
    console.log('Error ', error)
    setResponse(res, { type: 'serverError' })
  }
}

const update = async (req, res) => {
  try {
    const data = await productServices.update(req)
    setResponse(res, data)
  } catch (error) {
    setResponse(res, { type: 'serverError' })
  }
}

const findOne = async (req, res) => {
  try {
    const data = await productServices.findOne({ _id: req.params.proId })
    setResponse(res, data)
  } catch (error) {
    setResponse(res, { type: 'serverError' })
  }
}

const purge = async (req, res) => {
  try {
    // userId
    const data = await productServices.purge(req)

    setResponse(res, data)
  } catch (error) {
    console.log(error)
    setResponse(res, { type: 'serverError' })
  }
}


module.exports = {
  create,
  allProducts,
  update,
  findOne,
  purge
}
