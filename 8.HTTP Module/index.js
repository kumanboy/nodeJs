import http from 'http'
//Server Yaratish

const server = http.createServer((req, res) => {
    // res.statusCode = 404
    // res.statusMessage = "Not Found"
    // res.end()
    res.writeHead(202,'Good',{"Content-Type": 'text/html'})
    res.write("<h1>Hello Node Js</h1>")
})
// 8000 portga Serverni ishga tushirish
server.listen(8000, ()=> console.log('server ishga tushdi'))


