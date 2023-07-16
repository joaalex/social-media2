require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT
const routes = require('./routes')


app.use(cors())
app.use(bodyParser.json())
app.use('/api/v1', routes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
 })

app.use((req, res) => { 
    res.status(404).json({
        status: false,
        message: "Seems you are not in our planet"
    })
})