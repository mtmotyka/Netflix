import React from "react";

import "./play-button.scss";
import { ReactComponent as IcoPlay } from "../../assets/icons/ico-play.svg";

const PlayButton = (props) => {
  return (
    <button className={`btn--primary btn--play ${props.className}`}>
      <IcoPlay /> {props.text}
    </button>
  );
};

export default PlayButton;
