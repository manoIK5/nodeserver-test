// imports
const express = require('express');
const app = express();

const path = require('path');
// ````

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// adding to static assets
// SSR (server side rendering)
// })

app.all('*', (req,res)=>{
    res.status(404).send('resource not found')
})


// Listing on port 5000
app.listen(5000, ()=>{
    console.log('Server is listening on port 5000');
})