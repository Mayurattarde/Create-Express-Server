//In this we are going to learn "routing" and its implementation.
//Routing refers to determining how an application responds to a client request to a particular endpoint, 
//which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

//Each route can have one or more handler functions, which are executed when the route is matched.
// Route definition : app.METHOD(PATH, HANDLER) .. where "app" is an instance of express.
// And METHod is an HTTP request,(in lower case)  such as EG: app.get,app.post,.....
//PATH is a path on the server.
//HANDLER is the function executed when the route is matched.

//We define routing using methods of the Express app object 
//that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.

const express = require('express')
const app = express()
const port = 3000

// GET method route
app.get('/', (req, res) => {
    res.send('Hello World')
})

//GEt
// When /mayur is specified in url "http://localhost:3000'/mayur'"it will go to mayur's page.
app.get('/mayur', function(req, res) {
    const id = req.query.id // Query string
    res.send("Hello  Welcome to mayur's page" + id)
})
app.get('/mayur/:id', function(req, res) {
    const id = req.params.id // Here we can also use if else for condition....
    res.send("Hey Mayur" + id) // Here we will get that id which user's put as  in a URL.
})


// POST method route
app.post('/about', (req, res) => {
    res.send('about')
})


app.listen(port, () => {
    console.log(`This site is running at http://localhost:${port}`)
})