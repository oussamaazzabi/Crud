const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = 5000

connectDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/livre',require('./routes/bookRoutes'))
app.use(errorHandler)

app.listen(port, () =>console.log('server started on port ${port}'))