import React, { useState } from "react";

import "./recomendations-list.scss";
import { ReactComponent as IcoDropdown } from "../../assets/icons/ico-dropdown.svg";
import IcoRecomendations from "../../assets/icons/ico-recomendations-square.png";

const RecomendationsList = () => {
  const [isListOpened, setIsListOpened] = useState(false);
  return (
    <div className="custom-select">
      <div
        className={`custom-select__label label ${
          isListOpened === true ? "clicked" : ""
        }`}
        onClick={(e) => setIsListOpened(!isListOpened)}
      >
        <img src={IcoRecomendations} alt="" className="label__icon" />
        RECOMMENDED FOR YOU <IcoDropdown className="custom-select__arrow" />
      </div>
      <ul
        className={`custom-select__list ${
          isListOpened === true ? "opened" : ""
        }`}
      >
        <li onClick={(e) => setIsListOpened(!isListOpened)}>Recomendation 1</li>
        <li onClick={(e) => setIsListOpened(!isListOpened)}>Recomendation 2</li>
        <li onClick={(e) => setIsListOpened(!isListOpened)}>Recomendation 3</li>
      </ul>
    </div>
  );
};

export default RecomendationsList;
