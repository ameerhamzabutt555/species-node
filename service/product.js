const { product } = require('../models')


const create = async ({ body, file }) => {
  try {
    if (body) {
      const datas = {
        proName: body.proName,
        proDesc: body.proDesc,
        proPrice: body.proPrice,
        productPic: `http://192.168.0.103:6000/${file.path}`
      }
      console.log(datas)
      const data = await product.create(datas)
      return { type: 'success', message: `user created`, data }
    }
    return { type: 'success', message: `No Data to process` }
  } catch (error) {
    throw error
  }
}


const allProducts = async () => {
  try {
    const data = await product.find()
    if (data) {

      return { type: 'success', message: `user created`, data }
    }
    return { type: 'success', message: `No Data to process` }
  } catch (error) {
    throw error
  }
}

const update = async ({ params, body }) => {
  try {
    console.log(params)
    const _id = params.proId
    body.updatedAt = new Date()
    const data = await product.findByIdAndUpdate(_id, body, { new: true })
    if (data)
      return {
        type: 'success',
        message: `${data.proName.toUpperCase()} user Updated`,
        data
      }
    else return { type: 'bad', message: `product not found` }
  } catch (error) {
    console.log(error)
    throw error
  }
}

const findOne = async filters => {
  try {
    const data = await product.findOne(filters)
    if (data) {
      return { type: 'success', message: 'user found!', data }
    } else {
      return { type: 'bad', message: 'user not found!', data }
    }
  } catch (error) {
    throw error
  }
}

const purge = async ({ params }) => {
  try {
    const _id = params.proId
    const data = await product.findByIdAndDelete(_id)
    if (data) {
      return {
        type: 'success',
        message: `${data.proName.toUpperCase()} user Deleted`
      }
    } else return { type: 'bad', message: `user not found` }
  } catch (error) {
    console.log(error)
    throw error
  }
}


module.exports = {
  create,
  allProducts,
  update,
  findOne,
  purge
}
