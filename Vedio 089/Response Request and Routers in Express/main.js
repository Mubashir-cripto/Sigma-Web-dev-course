const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static('public'));
app.use('/blog', blog)
app.use('/shop' ,shop)

app.get('/', (req, res) => {
  console.log("Hey Its a get request")
  res.send('Hello World get!')
}).post('/', (req, res) => {
  console.log("Hey Its a post request")
  res.send('Hello World post!')
}).put('/', (req, res) => {
  console.log("Hey Its a put request")
  res.send('Hello World put!')
})

app.delete('/', (req, res) => {
  console.log("Hey Its a delete request")
  res.send('Hello World delete!')
})

app.get('/index' ,(req, res) => {
  console.log("Hey Its index")
  res.sendFile('templates/index.html' ,{root: __dirname})
})

app.get('/api' ,(req, res) => {
  res.json({a:1 ,b:2 ,c:3 ,name : ["Harry" ,"Mubashir"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})