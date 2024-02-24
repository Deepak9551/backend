// this exres same as import express from express

require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/deepak',(req,res)=>{
    res.send('This is Deepak Kumar')
})
app.get('/login',(req,res)=>{
    res.send("<h1>user is login</h1>")
})
app.get('logout',(req,res)=>{
res.send("user logout")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})