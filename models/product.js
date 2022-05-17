const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  proName: {
    type: String,
    required: true,
    trim: true
  },
  proDesc: {
    type: String,
    required: true,
    trim: true
  },
  proPrice: {
    type: Number,
    trim: true,
    required: true
  },
  productPic: {
    type: String,
    default:
      'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png'
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date
  }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product
