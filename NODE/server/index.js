const http= require('http')

const server = http.createServer(handler)
const port = 2000

function handler(req, res) {
    if(req.url == '/home'){
        res.write("Home")
        res.end
    }
    if(req.url == '/about'){
        res.write("about")
        res.end
    }
}

server.listen(port,()=>{
    console.log("server listening on port",port)
})
