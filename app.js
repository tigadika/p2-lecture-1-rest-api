const express = require('express')
const app = express()
const port = 3000
const routes = require('./router');

//? kita balikin dalam bentuk status dan json
//? ngirim request ke server => nge hit

//? get => status code 200

// urlencoded => body parser

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})