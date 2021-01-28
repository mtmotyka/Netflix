import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import "../../assets/styles/modules/_hamburgers.scss";

import LogoNetflix from "../../assets/images/netflix-logo.png";
import AvatarSmall from "../../assets/images/avatar-small.png";
import IcoHamburger from "../../assets/icons/ico-hamburger.png";
import { ReactComponent as IcoSearch } from "../../assets/icons/ico-search.svg";
import { ReactComponent as IcoNotification } from "../../assets/icons/ico-notification.svg";
import { ReactComponent as IcoDropdown } from "../../assets/icons/ico-dropdown.svg";
import FiltersMenu from "../FiltersMenu/FiltersMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={`header ${isScrolled ? "shrink" : ""}`}>
      <div className="header__main-menu">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={LogoNetflix} alt="www.netflix.com" />
          </Link>
        </div>
        <nav className="navigation">
          <ul
            className={`navigation__menu menu ${
              isMenuOpen === true ? "active" : ""
            }`}
          >
            <span
              className={`navigation__close-menu ${
                isMenuOpen === true ? "visible" : ""
              }`}
              onClick={(e) => setIsMenuOpen(false)}
            >
              &#10006;
            </span>
            <li className="menu__item">
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/">Movies</Link>
            </li>
            <li className="menu__item">
              <Link to="/">Series</Link>
            </li>
            <li className="menu__item">
              <Link to="/">My list</Link>
            </li>
            <li className="menu__item item item--mobile">
              <Link to="/">Movie genre 1</Link>
            </li>
            <li className="menu__item item item--mobile">
              <Link to="/">Movie genre 2</Link>
            </li>
            <li className="menu__item item item--mobile">
              <Link to="/">Movie genre 3</Link>
            </li>
            <li className="menu__item item item--mobile">
              <Link to="/">Movie genre 4</Link>
            </li>
            <li className="menu__item item item--mobile">
              <Link to="/">Movie genre 5</Link>
            </li>
            <li className="menu__item item item--mobile">
              <Link to="/">Recommendation 1</Link>
            </li>
            <li className="menu__item item item--mobile">
              <Link to="/">Recommendation 2</Link>
            </li>
            <li className="menu__item item item--mobile">
              <Link to="/">Recommendation 3</Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          aria-label="Otwórz menu"
          className={`hamburger hamburger--squeeze mobile-menu__hamburger ${
            isMenuOpen === true ? "is-active" : ""
          }`}
          onClick={(e) => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={IcoHamburger} alt="Open menu" />
        </button>
        <div className="profile-container">
          <div
            className={`profile-container__search-wrapper ${
              showSearchBar === true ? "visible" : ""
            }`}
          >
            <span
              className="profile-container__close-search"
              onClick={(e) => setShowSearchBar(false)}
            >
              &#10006;
            </span>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Start typing..."
              className={`rounded-input profile-container__search-input ${
                showSearchBar === true ? "visible" : ""
              }`}
            />
            <button
              type="submit"
              className="profile-container__search-btn btn--primary"
            >
              Search
            </button>
          </div>
          <IcoSearch
            className="profile-container__icon"
            onClick={(e) => setShowSearchBar(!showSearchBar)}
          />
          <IcoNotification className="profile-container__icon" />
          <div className="profile-select">
            <img
              src={AvatarSmall}
              alt="Jan Kowalski"
              className="profile-select__avatar"
            />
            <IcoDropdown className="profile-select__dropdown-icon" />
          </div>
        </div>
      </div>
      <FiltersMenu className={`${isScrolled ? "shrink" : ""}`} />
    </header>
  );
};

export default Header;
