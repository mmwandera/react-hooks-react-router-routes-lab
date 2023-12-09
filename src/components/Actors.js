import React from "react";
import { actors } from "../data";

// This component should render the text Actors Page in an <h1>, and make a new <div> for each actor. The <div> should contain the actor's name and a <ul> with a list of their movies.

function Actors() {

  const actorList = actors.map((actor, index) => {
    return (
      <div key={index}>
        <h1>{actor.name}</h1>
        <ul>
          {actor.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );

}

export default Actors;
