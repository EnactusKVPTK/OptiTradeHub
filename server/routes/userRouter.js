const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/register', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.auth)

module.exports = router