const Router = require('express')
const router = new Router()
const sendEmail = require('../controllers/email/sendEmail')

router.post('/', sendEmail.send)

module.exports = router
