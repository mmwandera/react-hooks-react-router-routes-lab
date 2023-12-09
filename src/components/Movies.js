import React from "react";
import { movies } from "../data";

// This component should render the text Movies Page in an <h1>, and make a new <div> for each movie. The <div> should contain the movie's title, time and a <ul> with a list of its genres, each within their own <li>.

function Movies() {

  const movieList = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
