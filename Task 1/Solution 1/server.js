const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  const movie1 = {"Title":"The Thing","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"109 min","Genre":"Horror, Mystery, Sci-Fi","Director":"John Carpenter","Writer":"Bill Lancaster, John W. Campbell Jr.","Actors":"Kurt Russell, Wilford Brimley, Keith David","Plot":"A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.","Language":"English, Norwegian","Country":"United States, Canada","Awards":"3 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"8.2","imdbVotes":"430,351","imdbID":"tt0084787","Type":"movie","DVD":"14 Feb 2006","BoxOffice":"$19,629,760","Production":"N/A","Website":"N/A","Response":"True"};
  const movie2 = {"Title":"Fast & Furious 6","Year":"2013","Rated":"PG-13","Released":"24 May 2013","Runtime":"130 min","Genre":"Action, Adventure, Crime","Director":"Justin Lin","Writer":"Chris Morgan, Gary Scott Thompson","Actors":"Vin Diesel, Paul Walker, Dwayne Johnson","Plot":"Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.","Language":"English, Spanish, Russian, Japanese, Cantonese, Dutch, Danish, Ukrainian","Country":"United States, Japan, Spain, United Kingdom","Awards":"11 wins & 22 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Metacritic","Value":"61/100"}],"Metascore":"61","imdbRating":"7.0","imdbVotes":"400,484","imdbID":"tt1905041","Type":"movie","DVD":"29 Oct 2013","BoxOffice":"$238,679,850","Production":"N/A","Website":"N/A","Response":"True"};
  const movie3 = {"Title":"The Lord of the Rings","Year":"1978","Rated":"PG","Released":"15 Nov 1978","Runtime":"132 min","Genre":"Animation, Adventure, Fantasy","Director":"Ralph Bakshi","Writer":"Chris Conkling, Peter S. Beagle, J.R.R. Tolkien","Actors":"Christopher Guard, William Squire, Michael Scholes","Plot":"The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.","Language":"English, Sindarin","Country":"United States, United Kingdom, Spain","Awards":"1 win & 3 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"50%"}],"Metascore":"N/A","imdbRating":"6.2","imdbVotes":"34,370","imdbID":"tt0077869","Type":"movie","DVD":"11 Sep 2001","BoxOffice":"$30,471,420","Production":"N/A","Website":"N/A","Response":"True"};
  const _movies = [movie1, movie2, movie3];
  const movies = [];

  _movies.forEach(movie => {
    let metascore = movie.Metascore;
    if(metascore == "N/A") metascore = 1;

    movies.push({
      "Title": movie.Title, 
      "Released": (new Date(movie.Released)).toISOString().substring(0, 10),
      "Runtime": Number(movie.Runtime.split(' ')[0]), 
      "Genres": movie.Genre.replace(' ', '').split(','), 
      "Directors": movie.Director.replace(' ', '').split(','), 
      "Writers": movie.Writer.replace(' ', '').split(','),
      "Actors": movie.Actors.replace(' ', '').split(','),
      "Plot": movie.Plot,
      "Poster": movie.Poster,
      "Metascore": Number(metascore),
      "imdbRating": Number(movie.imdbRating)
    });
  });

  res.send(movies)
  })

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")
