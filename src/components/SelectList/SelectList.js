import React, { useState } from "react";

import "./select-list.scss";
import "../../assets/styles/modules/bootstrap/bootstrap.scss";
import { ReactComponent as IcoDropdown } from "../../assets/icons/ico-dropdown.svg";

const SelectList = () => {
  const [isListOpened, setIsListOpened] = useState(false);
  return (
    <div className="custom-select dropdown">
      <div
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        className={`custom-select__label dropdown-toggle ${
          isListOpened === true ? "clicked" : ""
        }`}
        onClick={(e) => setIsListOpened(!isListOpened)}
      >
        Film genre{" "}
        <IcoDropdown
          className={`custom-select__arrow ${
            isListOpened === true ? "opened" : ""
          }`}
        />
      </div>
      <ul
        aria-labelledby="dropdownMenuButton"
        className={`custom-select__list dropdown-menu ${
          isListOpened === true ? "show" : ""
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
