const express = require('express')
const multer = require('multer');
const { productController } = require('../controllers')
const app = express()
const router = express.Router()
var bodyParser = require('body-parser');

// const upload = multer({ dest: './uploads' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }

})
var upload = multer({ storage: storage })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



router.post('/create', upload.single('productPic'), productController.create)
router.get('/allProducts', productController.allProducts)
router.put('/update/:proId', productController.update)
router.get('/oneProduct/:proId', productController.findOne)
router.delete('/delete/:proId', productController.purge)
module.exports = router
