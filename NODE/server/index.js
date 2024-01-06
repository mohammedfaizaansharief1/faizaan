const http= require('http')

const server = http.createServer()
const port = 2000

server.listen(port)

console.log("server listening on port",port)