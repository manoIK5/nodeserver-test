const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html', 'utf8')
const homeStyles = readFileSync('./navbar-app/styles.css', 'utf8')
const homeImage = readFileSync('./navbar-app/logo.svg', 'utf8')
const homeLogic = readFileSync('./navbar-app/browser-app.js', 'utf8')


const server = http.createServer((req, res)=>{
    // console.log(req.method)
    const url = req.url;

    // home
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        // res.write('<h1>home page</h1>')
        res.write(homePage)

        res.end()

    // CSS
    } else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    } 
    // LOGO
     else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    } 
    // app-js
     else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    } 
    // about    
     else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    } 
    // 404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found!</h1>')
        res.end()
    }
    
})

server.listen(5000)