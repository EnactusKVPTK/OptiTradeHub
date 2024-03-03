require('dotenv').config()
const express = require('express')
const sequelize = require('./db')

const app = express()
const PORT = process.env.PORT || 6000

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