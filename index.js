const express = require('express')
const app = express()
const cors = require('cors')

const { initializeDB } = require('./db/db.connect.js')
const { errorHandler, routeNotFound } = require('./middlewares/index')
const {login,signUp,quiz} = require("./routes/index")

//assigning port
const PORT = process.env.PORT || 3021

//connection to DB
initializeDB()

//for parsing body into json
app.use(express.json())

app.use(cors())

app.use('/login', login)
app.use('/signup', signUp)
app.use('/quiz', quiz)

app.get('/', (request, response) => {
  response.send('Hello World!')
})

// Don't move it
// Keep at end to handle errors and 404s

app.use(routeNotFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log('server started on port: ', PORT)
})
