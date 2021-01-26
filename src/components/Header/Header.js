import React, { useState, useEffect } from "react";

import "./header.scss";

import LogoNetflix from "../../assets/images/netflix-logo.png";
import AvatarSmall from "../../assets/images/avatar-small.png";
import { ReactComponent as IcoSearch } from "../../assets/icons/ico-search.svg";
import { ReactComponent as IcoNotification } from "../../assets/icons/ico-notification.svg";
import { ReactComponent as IcoDropdown } from "../../assets/icons/ico-dropdown.svg";
import FiltersMenu from "../FiltersMenu/FiltersMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={`header ${isScrolled ? "shrink" : ""}`}>
      <div className="header__main-menu">
        <div className="logo-wrapper">
          <a href="/">
            <img src={LogoNetflix} alt="www.netflix.com" />
          </a>
        </div>
        <nav className="navigation">
          <ul className="navigation__menu menu">
            <li className="menu__item">
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a href="/">Movies</a>
            </li>
            <li className="menu__item">
              <a href="/">Series</a>
            </li>
            <li className="menu__item">
              <a href="/">My list</a>
            </li>
          </ul>
        </nav>
        <div className="profile-container">
          <IcoSearch className="profile-container__icon" />
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
