const container = document.querySelector("body");

(function () {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
        if (xhr.status == 200) {
            /* Part 2: Build the HTML elements here and append them to the body */
            JSON.parse(xhr.responseText).forEach(movie => add_movie(movie));
        } else {
            alert("Daten konnten nicht geladen werden, Status " + xhr.status + " - " + xhr.statusText)
        }
    }
    xhr.open("GET", "/movies")
    xhr.send()
})();

let add_movie = (movie) => {
    let movie_elmnt = document.createElement('article');
    movie_elmnt.innerHTML = (`
    <img src="${movie.Poster}">
    <h1>${movie.Title}</h1>
    <p><span>Runtime ${Math.trunc(movie.Runtime / 60) + 'h ' + Math.trunc(movie.Runtime % 60) + 'm'}</span><span>•</span><span>Released on ${new Date(movie.Released).toLocaleDateString()}</span></p>
    <p>${'<span class="genre">' + movie.Genres.join('</span><span class="genre">') + '</span>'}</p>
    <p>${movie.Plot}</p>
    <h2>Director</h2>
    <ul>
    ${'<li>' + movie.Directors.join('</li><li>') + '</li>'}
    </ul>
    <h2>Writers</h2>
    <ul>
        ${'<li>' + movie.Writers.join('</li><li>') + '</li>'}
    </ul>
    <h2>Actors</h2>
    <ul>
    ${'<li>' + movie.Actors.join('</li><li>') + '</li>'}
    </ul>
    `);
    container.appendChild(movie_elmnt);
} 