const express = require('express')
const path = require('path')
const app = express()
const movies = require('./movies.json')

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  res.type("application/json")
  res.send(JSON.stringify(movies));
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")
