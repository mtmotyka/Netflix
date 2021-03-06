import React from "react";
import AddButton from "../AddButton/AddButton";
import PlayButton from "../PlayButton/PlayButton";

import "./popup-movie-details.scss";

const PopupMovieDetails = (props) => {
  return (
    <>
      <div className="popup-container active-popup">
        <div className={`popup-details`}>
          <span
            className="popup-details__close-button"
            onClick={props.handleClose}
          >
            &#10006;
          </span>
          <img
            src={props.data.img}
            alt=""
            className="img-fluid popup-details__image"
          />
          <div className="text-container">
            <p className="text-container__title">{props.data.title}</p>
            <p className="text-container__date">{props.data.releaseDate}</p>
            <p className="text-container__artist">
              Artist: {props.data.artist}
            </p>
            <p className="text-container__desc">{props.data.desc}</p>
            <div className="buttons-container">
              <PlayButton text="Watch" className="buttons-container__button" />
              <AddButton
                text="Add list"
                className="buttons-container__button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="popup-overlay" onClick={props.handleClose} />
    </>
  );
};

export default PopupMovieDetails;
