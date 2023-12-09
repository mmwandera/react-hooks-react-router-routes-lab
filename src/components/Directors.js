import React from "react";
import { directors } from "../data";

// This component should render the text Directors Page in an <h1>, and make a new <div> for each director. The <div> should contain the director's name and a <ul> with a list of their movies.

function Directors() {

  const directorList = directors.map((director, index) => {
    return (
      <div key={index}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  )
}

export default Directors;
