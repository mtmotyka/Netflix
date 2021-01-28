import React, { useState } from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import { Fade } from "react-awesome-reveal";

import "./movies-slider.scss";

import PopupMovieDetails from "../PopupMovieDetails/PopupMovieDetails";

const MoviesSlider = (props) => {
  const [popup, setPopup] = useState({ data: "" });
  const [showPopup, setShowPopup] = useState(false);

  const moviesSlider = {
    arrows: true,
    slidesToShow: 10,
    infinite: false,
    slidesToScroll: 1,
    draggable: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openPopup = (movie) => {
    setPopup({
      data: {
        title: movie["im:name"].label,
        img: movie["im:image"][2].label,
        desc: movie.summary.label,
        releaseDate: movie["im:releaseDate"].attributes.label,
        artist: movie["im:artist"].label,
      },
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setPopup({ data: "" });
    setShowPopup(false);
  };

  const renderPopup = () => {
    if (showPopup) {
      return <PopupMovieDetails data={popup.data} handleClose={closePopup} />;
    }
  };

  return (
    <>
      <div className="movies-slider">
        <Fade delay={30} direction={"left"} triggerOnce>
          <div className="movies-slider__category-name">{props.category}</div>
        </Fade>
        <Slider {...moviesSlider}>
          {props.movies.map((movie, index) => {
            return (
              <LazyLoad once>
                <div key={index} onClick={(e) => openPopup(movie)}>
                  <div className="single-movie">
                    <img
                      src={movie["im:image"][2].label}
                      alt=""
                      className="img-fluid single-movie__image"
                    />
                  </div>
                </div>
              </LazyLoad>
            );
          })}
        </Slider>
        {renderPopup()}
      </div>
    </>
  );
};
export default MoviesSlider;
