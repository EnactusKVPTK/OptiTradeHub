require('dotenv').config()
const express = require('express')
const models = require('./models/models')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileupload = require('express-fileupload')

const app = express()
const PORT = process.env.PORT || 6000

app.use(cors())
app.use(express.json())
app.use(fileupload({}))
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        sequelize.sync()
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()