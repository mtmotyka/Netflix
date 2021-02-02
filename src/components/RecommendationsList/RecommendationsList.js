import React, { useState } from "react";

import "./recommendations-list.scss";
import { ReactComponent as IcoDropdown } from "../../assets/icons/ico-dropdown.svg";
import IcoRecommendations from "../../assets/icons/ico-recomendations-square.png";

const RecommendationsList = () => {
  const [isListOpened, setIsListOpened] = useState(false);
  return (
    <div className="custom-select custom-select--recomendations">
      <div
        className={`custom-select__label label ${
          isListOpened === true ? "clicked" : ""
        }`}
        onClick={(e) => setIsListOpened(!isListOpened)}
      >
        <img src={IcoRecommendations} alt="" className="label__icon" />
        RECOMMENDED FOR YOU <IcoDropdown className={`custom-select__arrow ${isListOpened === true ? "opened" : ""}`} />
      </div>
      <ul
        className={`custom-select__list ${
          isListOpened === true ? "opened" : ""
        }`}
      >
        <li onClick={(e) => setIsListOpened(!isListOpened)}>
          Recommendation 1
        </li>
        <li onClick={(e) => setIsListOpened(!isListOpened)}>
          Recommendation 2
        </li>
        <li onClick={(e) => setIsListOpened(!isListOpened)}>
          Recommendation 3
        </li>
      </ul>
    </div>
  );
};

export default RecommendationsList;
