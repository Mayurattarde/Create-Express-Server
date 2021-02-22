 // Simple server(not http) using express
 // import express (after npm install express)
 const express = require('express');

 // create new express app and save it as "app"
 const app = express(); // Here app is an instance of express.

 // server configuration
 const PORT = 8080; //PORT value may vary.

 // create a route for the app
 app.get('/', (req, res) => { //Can also use function(req,res).....
     res.send('Hello World');
 });

 // make the server listen to requests
 app.listen(PORT, () => {
     console.log(`Server running at: http://localhost:${PORT}/`); //Here PORT is 8080
 });