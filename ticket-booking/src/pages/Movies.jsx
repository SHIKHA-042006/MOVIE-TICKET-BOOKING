import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "./Movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch real movies (shows) from the backend instead of using hardcoded data
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("/shows");
        setMovies(res.data);
      } catch (err) {
        setError("Could not load movies. Make sure the backend server is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleBookNow = (movie) => {
    navigate("/movie-info", { state: movie });
  };

  if (loading) return <p className="movies-status">Loading movies...</p>;
  if (error) return <p className="movies-status">{error}</p>;

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie._id} className="movie-card">
          <img src={movie.imgUrl} alt={movie.title} className="movie-img" />
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>Price: ₹{movie.price}</p>
            <button onClick={() => handleBookNow(movie)} className="book-btn">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
