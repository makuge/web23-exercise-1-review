const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  fs.readFile(path.join(__dirname, 'movies.json'), (err, data) => {
    if (err) throw err;
    let movieArr = JSON.parse(data);
    res.send(movieArr)
  });
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")