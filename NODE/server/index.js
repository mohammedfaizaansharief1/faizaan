const express = require('express')
const app = express()
let fs = require('fs')
let data = fs.readFileSync('./index.html')

const port = 3000
// const port = 65535

app.get('/', (req, res) => {
  // res.send(data)
  res.send('get!')
  res.end()
})

// app.get('/profile/:username', (req, res) => {
  //   const username = req.params.username
  //   res.send("assalamualikum")
  //   // res.json.toString                                                                                                                                                                                                                                                                                              (username)
  //   res.end()
  // })
  
  app.post('/',(req,res)=>{
    // console.log("req.body")
    // res.send("post")
    const {name} = req.body
    res.send(name)
    // res.send(`name: ${name}`)
    res.end()
  // res.query()
})
app.put('/',(req,res)=>{
     res.send('put!')
     res.end()
})

app.delete('/',(req,res)=>{
  res.send('detele!')
  res.end()
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})