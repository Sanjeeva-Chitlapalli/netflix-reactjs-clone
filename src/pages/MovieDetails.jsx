import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import "../styles/MovieDetails.css";
import Row from "../components/Row";
import requests from "../requests";

function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a02bafb31f306201f84291bb2407cdc8`
      );
      setMovie([request.data][0]);
    }
    fetchData();
  }, [id]);
  console.log(movie);

  const handlePlayClick = () => {
    const title = movie?.title || movie?.name || movie?.original_name;
    const playerPageUrl = `/player/${encodeURIComponent(title)}`;
    window.open(playerPageUrl, "_blank");
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}{" "}
          </h1>
          <div className="banner_buttons">
            <button className="banner__buttons" onClick={handlePlayClick}>
              Play
            </button>
            <button className="banner__buttons">My List</button>
            <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
        </div>
      </header>
      <div className="trending_row">
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      </div>
    </>
  );
}

export default MovieDetails;
