import React, { useState } from "react";

import "./select-list.scss";
import { ReactComponent as IcoDropdown } from "../../assets/icons/ico-dropdown.svg";

const SelectList = () => {
  const [isListOpened, setIsListOpened] = useState(false);
  return (
    <div className="custom-select">
      <div
        className={`custom-select__label ${
          isListOpened === true ? "clicked" : ""
        }`}
        onClick={(e) => setIsListOpened(!isListOpened)}
      >
        Film genre <IcoDropdown className="custom-select__arrow" />
      </div>
      <ul
        className={`custom-select__list ${
          isListOpened === true ? "opened" : ""
        }`}
      >
        <li onClick={(e) => setIsListOpened(!isListOpened)}>Movie genre 1</li>
        <li onClick={(e) => setIsListOpened(!isListOpened)}>Movie genre 2</li>
        <li onClick={(e) => setIsListOpened(!isListOpened)}>Movie genre 3</li>
        <li onClick={(e) => setIsListOpened(!isListOpened)}>Movie genre 4</li>
        <li onClick={(e) => setIsListOpened(!isListOpened)}>Movie genre 5</li>
      </ul>
    </div>
  );
};

export default SelectList;
