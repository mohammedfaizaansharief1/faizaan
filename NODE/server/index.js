const express = require('express')
const app = express()
let fs = require('fs')

const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/',(req,res)=>{
    // console.log("req.body")
    res.send("Hi")
    res.end()
})
app.put('/',(req,res)=>{
    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})