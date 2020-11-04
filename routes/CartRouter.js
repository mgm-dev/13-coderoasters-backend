const express = require('express')
const router = express.Router()

const { validateToken } = require('../middleware')
const { CartController } = require('../controllers')

router.get('/', validateToken, CartController.getCartItems)
router.post('/', validateToken, CartController.createOrAddCartItem)
router.delete('/', validateToken, CartController.deleteCartItem)
router.patch('/count', validateToken, CartController.increaseAndDecreaseProductQuantity)

module.exports = router