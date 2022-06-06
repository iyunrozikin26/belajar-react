const express = require('express')
const app = express()
const port = 3000
const allRoutes = require('./routes')
const cors = require('cors')

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

app.use(allRoutes)



app.listen(port, () => {
  console.log(`server running http://localhost:${port}`)
})