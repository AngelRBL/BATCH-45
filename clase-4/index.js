require('dotenv').config()
require('./mongoClient/index')
import errorHandler from './utils/errorHandler'
const express = require('express')
const api = express()
const PORT = process.env.PORT || 4000

api.use(express.json({ extended: true }))
api.use(require('./routes/ProductRoutes'))
api.use(require('./routes/TicketRoutes'))

api.listen(PORT, () => console.log('Server Initialized...'))









