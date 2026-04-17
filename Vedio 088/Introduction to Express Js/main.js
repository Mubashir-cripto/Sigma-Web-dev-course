const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get ,or app.post or app.put or app.delete(path ,handler)
app.get('/', (req, res) => { //request ,response
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About us!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
  // logic to fetch intro to js from the db
  // for URL: http://localhost:3000/blog/Intro-to-Parosi?mode=dark&region=in
  console.log(req) // will output { slug: 'Intro-to-Parosi'}
  console.log(req.params) // will output { slug: 'Intro-to-Parosi'}
  console.log(req.query) // will output { mode: 'dark' , region: 'in }
  res.send(`Hello ${req.params.slug}`)
})

// app.get('/blog/Intro-To_JS', (req, res) => {
//   // logic to fetch intro to js from the db
//   res.send('Hello Intro-To_JS')
// })

// app.get('/blog/Intro-To_Python', (req, res) => {
//   // logic to fetch intro to Python from the db
//   res.send('Hello Intro-To_JS')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
