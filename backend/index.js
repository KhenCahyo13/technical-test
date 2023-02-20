const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const pRoute = require('./routes/PengelolaRoute')
const aRoute = require('./routes/AtasanRoute')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.json({ msg: "Selamat datang di RestAPI Technical Test" })
})

app.use('/pengelola', pRoute)
app.use('/atasan', aRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server berjalan di PORT ${PORT}`)
})