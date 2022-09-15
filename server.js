const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

const newsRouterFn = require('./Routers/newsRouter')

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
})

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/news', newsRouterFn())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
