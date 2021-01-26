import React from "react";

const MoviesSlider = (props) => {
  return (
    <div>
      <p>{props.category}</p>
      <ul>
        {props.movies.map((movie) => {
          return <li>{movie["im:name"].label}</li>;
        })}
      </ul>
    </div>
  );
};
export default MoviesSlider;
