import React from "react";
import Layout from "../../components/Layout/Layout";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";

import "./dashboard.scss";

import MainVideoTitle from "../../assets/images/main-video-title.png";
import PlayButton from "../../components/PlayButton/PlayButton";
import AddButton from "../../components/AddButton/AddButton";
import SlidersWrapper from "../../components/SlidersWrapper/SlidersWrapper";

const Dashboard = () => {
  const mainSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    draggable: false,
  };
  return (
    <Layout>
      <section className="main-video">
        <Slider {...mainSliderSettings}>
          {Array(3)
            .fill(null)
            .map((index) => {
              return (
                <div key={index}>
                  <div className="single-slide">
                    <div className="video-informations">
                      <Fade delay={0} triggerOnce>
                        <img
                          src={MainVideoTitle}
                          alt="Jak ukraść księżyc"
                          className="video-informations__logo"
                        />
                      </Fade>
                      <Fade delay={0} triggerOnce>
                        <p className="video-informations__desc">
                          He is an evil villain who wants to steal the moon.
                          Fortunately for us, three girls are not going to let
                          this happen!
                        </p>
                      </Fade>
                      <Fade delay={0} triggerOnce>
                        <div className="video-informations__buttons-wrapper buttons-wrapper">
                          <PlayButton
                            text="Watch"
                            className="buttons-wrapper__button"
                          />
                          <AddButton
                            text="Add list"
                            className="buttons-wrapper__button"
                          />
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </section>
      <section className="movies-sliders">
        <SlidersWrapper />
      </section>
    </Layout>
  );
};

export default Dashboard;
