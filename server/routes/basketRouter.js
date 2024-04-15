const Router = require('express')
const router = new Router()
const BascketController = require('../controllers/basketController')

router.post('/add', BascketController.add)
router.get('/get/:email', BascketController.get)
// router.get('/user/:userId/product/:productId', BascketController.checkBasket)

module.exports = router
