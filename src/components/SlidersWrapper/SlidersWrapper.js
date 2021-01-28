import React, { useState, useEffect } from "react";
import _ from "lodash";

import "./sliders-wrapper.scss";

import MoviesSlider from "../MoviesSlider/MoviesSlider";

const SlidersWrapper = () => {
  const [movies, setMovies] = useState(null);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/topmovies/limit=100/json"
      );
      const data = await response.json();
      const movieData = data.feed.entry;
      setMovies(movieData);
      const categories = _.groupBy(
        movieData,
        (movie) => movie.category.attributes.label
      );
      setCategories(categories);
    })();
  }, []);
  const renderSliders = () => {
    if (!categories) {
      return (
        <div className="loading-placeholder">
          Loading popular categories and movies...
        </div>
      );
    }
    return Object.keys(categories).map((category) => {
      return <MoviesSlider category={category} movies={categories[category]} />;
    });
  };
  return <div>{renderSliders()}</div>;
};

export default SlidersWrapper;
