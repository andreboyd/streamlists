import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Movies.css";  
function Movies() {
  const [movieList, setMovieList] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (query = "") => {
    const endpoint = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=e86915f11367368bcd1667ccbbea2996&query=${query}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=e86915f11367368bcd1667ccbbea2996`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        localStorage.setItem("movies", JSON.stringify(json.results)); // Store in localStorage
      });
  };

  useEffect(() => {
      getMovies();
  }, []);

  return (
    <div className="movies-container">
      <h1>Movie List</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => getMovies(searchTerm)}>Search</button>

      <div className="movie-grid">
        {movieList.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
