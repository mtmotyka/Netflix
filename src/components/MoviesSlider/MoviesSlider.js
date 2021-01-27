import React, { useState } from "react";
import Slider from "react-slick";

import "./movies-slider.scss";

import PopupMovieDetails from "../PopupMovieDetails/PopupMovieDetails";

const MoviesSlider = (props) => {
  const [popup, setPopup] = useState({ data: "" });
  const moviesSlider = {
    dots: false,
    arrows: true,
    slidesToShow: 10,
    infinite: false,
    slidesToScroll: 1,
    draggable: false,
  };

  const triggerPopup = (movie) => {
    setPopup({
      data: {
        title: movie["im:name"].label,
        img: movie["im:image"][2].label,
        desc: movie.summary.label,
        releaseDate: movie["im:releaseDate"].attributes.label,
        artist: movie["im:artist"].label,
        active: true,
      },
    });
  };

  return (
    <div className="movies-slider">
      <div className="movies-slider__category-name">{props.category}</div>
      <Slider {...moviesSlider}>
        {props.movies.map((movie, index) => {
          return (
            <div key={index} onClick={(e) => triggerPopup(movie)}>
              <div className="single-movie">
                <img
                  src={movie["im:image"][2].label}
                  alt=""
                  className="img-fluid single-movie__image"
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <PopupMovieDetails data={popup.data} />
    </div>
  );
};
export default MoviesSlider;
