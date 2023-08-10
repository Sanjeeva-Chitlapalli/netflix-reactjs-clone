import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import "./styles/row.css";

function Row({ title, fetchUrl }) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      {/*title*/}
      <h2>{title}</h2>
      <div className="row_posters">
        {loading
          ? // Show skeleton loader while loading
            Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="row_poster card_box loading" />
            ))
          : // Render posters when data is fetched
            movies.map((movie) => (
              <img
                key={movie.id}
                className="row_poster"
                src={`${base_url}${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/movies/${movie.id}`)}
              />
            ))}
      </div>
    </div>
  );
}

export default Row;
