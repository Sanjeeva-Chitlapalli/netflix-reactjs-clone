import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./styles/Banner.css";

import PlayerPage from "../pages/PlayerPage"; // Import the new PlayerPage component

function Banner() {
  const [movie, setMovie] = useState(null); // Initialize movie as null
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomIndex]);
      setLoading(false); // Set loading to false after data is fetched
    }
    fetchData();
  }, []);

  const handlePlayClick = () => {
    const title = movie?.title || movie?.name || movie?.original_name;
    const playerPageUrl = `/player/${encodeURIComponent(title)}`;
    window.open(playerPageUrl, "_blank");
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className={`banner ${loading ? "loading" : ""}`}>
      <div className={`banner_contents ${loading ? "loading" : ""}`}>
        <h1 className={`banner_title ${loading ? "loading" : ""}`}>
          {loading
            ? "Loading..."
            : movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={`banner_buttons ${loading ? "loading" : ""}`}>
          <button
            className={`banner__buttons ${loading ? "loading" : ""}`}
            onClick={handlePlayClick}
          >
            {loading ? "Loading..." : "Play"}
          </button>
          <button className={`banner__buttons ${loading ? "loading" : ""}`}>
            My List
          </button>
        </div>
        <h1 className={`banner__description ${loading ? "loading" : ""}`}>
          {loading ? "Loading..." : truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fade"></div>
    </header>
  );
}

export default Banner;
