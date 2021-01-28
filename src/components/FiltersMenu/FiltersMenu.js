import React from "react";

import "./filters-menu.scss";

import IcoHamburger from "../../assets/icons/ico-hamburger.png";
import SelectList from "../SelectList/SelectList";
import RecommendationsList from "../RecommendationsList/RecommendationsList";

const FiltersMenu = (props) => {
  return (
    <div className={`filters-menu ${props.className}`}>
      <div className="filters-menu__left-side left-side">
        <div className="left-side__filter-name">Movies</div>
        <SelectList />
      </div>
      <div className="filters-menu__right-side right-side">
        <img src={IcoHamburger} alt="Open menu" />
        <div className="right-side__select select-wrapper">
          <RecommendationsList />
        </div>
      </div>
    </div>
  );
};

export default FiltersMenu;
