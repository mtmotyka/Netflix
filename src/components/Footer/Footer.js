import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";
import LogoNetflix from "../../assets/images/netflix-logo-n.png";
import { ReactComponent as FacebookIcon } from "../../assets/icons/ico-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/ico-twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/ico-youtube.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/ico-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src={LogoNetflix}
          alt="www.netflix.com"
          className="container__netflix-logo"
        />
        <div className="inner">
          <ul className="inner__menu">
            <li>
              <Link to="/">Sound and subtitles</Link>
            </li>
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Contact with us</Link>
            </li>
          </ul>
        </div>
        <div className="inner">
          <ul className="inner__menu">
            <li>
              <Link to="/">Audiodescription</Link>
            </li>
            <li>
              <Link to="/">Investor relations</Link>
            </li>
            <li>
              <Link to="/">Legal information</Link>
            </li>
          </ul>
        </div>
        <div className="inner">
          <ul className="inner__menu">
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Work</Link>
            </li>
            <li>
              <Link to="/">Cookie settings</Link>
            </li>
          </ul>
        </div>
        <div className="inner">
          <ul className="inner__menu">
            <li>
              <Link to="/">Gift cards</Link>
            </li>
            <li>
              <Link to="/">Terms of use</Link>
            </li>
            <li>
              <Link to="/">Informations about company</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="socials-container">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="socials-container__single-icon"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="socials-container__single-icon"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="socials-container__single-icon"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="socials-container__single-icon"
        >
          <YoutubeIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
