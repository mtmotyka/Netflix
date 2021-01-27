import React, { useState } from "react";

import "./popup-movie-details.scss";

const PopupMovieDetails = (props) => {
  const closePopup = () => {
    document
      .getElementsByClassName("active-popup")[0]
      .classList.remove("active-popup");
  };
  // const [closePopup, setClosePopup] = useState("");
  return (
    <>
      <div
        className={`popup-details ${
          props.data.active === true ? "active-popup" : "kurwy"
        }`}
      >
        <span className="popup-details__close-button" onClick={closePopup}>
          &#10006;
        </span>
        <img src={props.data.img} alt="" className="img-fluid" />
        <div className="text-container">
          <p className="text-container__title">{props.data.title}</p>
          <p className="text-container__date">{props.data.releaseDate}</p>
          <p className="text-container__artist">Artist: {props.data.artist}</p>
          <p className="text-container__desc">{props.data.desc}</p>
        </div>
      </div>
      <div className="popup-overlay" />
    </>
  );
};

export default PopupMovieDetails;
