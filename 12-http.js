const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Welcome to home page')
    } else if(req.url === '/about') {
        res.end('Here is our short history')
    } else {
        res.end(`
        <h1>Not Found</h1>
        <p>Page not found</p>
        <a href="/">Back</a>
        `)
    } 
})

server.listen(5000)