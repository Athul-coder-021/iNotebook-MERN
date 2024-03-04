const connectToMongo = require('./db.js');
const express = require('express')
var cors = require('cors')
// var app = express()

connectToMongo();
const app = express()
const port = 5000

app.use(cors())

// to get the request body use the below middle ware
app.use(express.json())


//Avialable Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))



app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})
 