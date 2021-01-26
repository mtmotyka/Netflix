import React from "react";
import Layout from "../../components/Layout/Layout";
import Slider from "react-slick";

import "./dashboard.scss";

import MainVideoTitle from "../../assets/images/main-video-title.png";
import PlayButton from "../../components/PlayButton/PlayButton";
import AddButton from "../../components/AddButton/AddButton";

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
  };
  return (
    <Layout>
      <section className="main-video">
        <Slider {...mainSliderSettings}>
          <div>
            <div className="single-slide">
              <div className="video-informations">
                <img src={MainVideoTitle} alt="Jak ukraść księżyc" />
                <p className="video-informations__desc">
                  He is an evil villain who wants to steal the moon. Fortunately
                  for us, three girls are not going to let this happen!
                </p>
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
              </div>
            </div>
          </div>
          <div>
            <div className="single-slide">
              <div className="video-informations">
                <img src={MainVideoTitle} alt="Jak ukraść księżyc" />
                <p className="video-informations__desc">
                  He is an evil villain who wants to steal the moon. Fortunately
                  for us, three girls are not going to let this happen!
                </p>
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
              </div>
            </div>
          </div>
          <div>
            <div className="single-slide">
              <div className="video-informations">
                <img src={MainVideoTitle} alt="Jak ukraść księżyc" />
                <p className="video-informations__desc">
                  He is an evil villain who wants to steal the moon. Fortunately
                  for us, three girls are not going to let this happen!
                </p>
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
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </Layout>
  );
};

export default Dashboard;
