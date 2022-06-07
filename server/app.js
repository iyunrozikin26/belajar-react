require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const allRoutes = require('./routes')
const cors = require('cors')
const errHandler = require('./middlewares/errHandler')

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

app.use(allRoutes)

app.use(errHandler)

app.listen(port, () => {
  console.log(`Server Running On ${port}`)
})