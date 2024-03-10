const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleare = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleare, userController.check)

module.exports = router