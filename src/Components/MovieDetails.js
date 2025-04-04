import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "../CSS/MovieDetails.css";  

function MovieDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e86915f11367368bcd1667ccbbea2996`
    )
      .then((res) => res.json())
      .then((json) => setMovie(json));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <img
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <button onClick={() => addToCart(movie)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default MovieDetails;
