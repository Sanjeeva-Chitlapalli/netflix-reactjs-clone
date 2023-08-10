import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import "../styles/categorypage.css";
import requests from "../requests";
import { useNavigate } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function CategoryPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const fetchurl = {
    action: requests.fetchActionMovies,
    comedy: requests.fetchComedyMovies,
    horror: requests.fetchHorrorMovies,
    Romance: requests.fetchRomanceMovies,
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl[category]);
      setMovies(request.data.results);
      setFilteredMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [category]);

  useEffect(() => {
    // Filter movies based on the search term
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, movies]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="category_page">
        <h1 className="category_title">{capitalizeFirstLetter(category)}</h1>
        <div className="search_bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="category_rows">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie_item"
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
