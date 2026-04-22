const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs");

// app.use(express.static('public')) //request ,response and next(means agla middleware)(special function)
app.use('/blog', blog)

// middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.mobi = "I am mobi bhai"
    
    fs.appendFileSync("logs.txt" ,`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()
})

// middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.mobi = "I am dawer bhai"
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route handler
app.get('/about', (req, res) => {
  res.send('Hello about!' + req.mobi)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})