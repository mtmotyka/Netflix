import React from "react";

import "./filters-menu.scss";

import IcoHamburger from "../../assets/icons/ico-hamburger.png";

const FiltersMenu = (props) => {
  return (
    <div className={`filters-menu ${props.className}`}>
      <div className="filters-menu__left-side left-side">
        <div className="left-side__filter-name">Movies</div>
        <div className="select-wrapper">
          <select name="movie-genre" id="movie-genre">
            <option value="" disabled selected hidden>
              Film genre
            </option>
            <option value="commedy">Commedy</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      </div>
      <div className="filters-menu__right-side right-side">
        <img src={IcoHamburger} alt="Open menu" />
        <div className="right-side__select select-wrapper">
          <select name="movie-genre" id="movie-genre">
            <option value="" disabled selected hidden>
              Film genre
            </option>
            <option value="commedy">Commedy</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FiltersMenu;
