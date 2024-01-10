const http= require('http');

const server = http.createServer(handler);
const port = 2000

function handler(req, res) {
    // if(req.url === '/'){
    //     res.write("Home")
    //     res.end()
    // }
    // if(req.url == '/about'){
    //     res.write("about")
    //     res.end()
    // }

    res.write("second")
    res.end()
}

server.listen(port,()=>{
    console.log("server listening on port",port)
})
console.log("first")