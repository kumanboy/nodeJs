import fs from 'fs';
import http from "http"

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('../public/home.html', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.readFile('../public/about.html', 'utf8', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>404 Not Found</h1>')
    }
})

server.listen(8000,()=> console.log('Server started'))
