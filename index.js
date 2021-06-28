const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('./connection/connection')

const productController = require('./controller/ProductController')
const orderController = require('./controller/OrderController')
const userController = require('./controller/UserController')

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.use("/products", productController)
app.use("/orders", orderController)
app.use("/user", userController)

app.get('/', (req, res) => res.send('Server Started'))
app.listen(3000, () => console.log(`App listening on port 3000!`))