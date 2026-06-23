import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MovieInfo.css";

export default function MovieInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state;

  if (!movie) {
    return <p>No movie selected. Go back to Movies.</p>;
  }

  return (
    <div className="info-container">
      <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>
      <img src={movie.imgUrl} alt={movie.title} className="info-img" />
      <div className="info-details">
        <h2>{movie.title}</h2>
        <p><strong>Price:</strong> ₹{movie.price}</p>
        <p><strong>Theater:</strong> {movie.theater}</p>
        <p><strong>Showtime:</strong> {movie.date} • {movie.time}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Release Date:</strong> {movie.releaseDate}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p><strong>Description:</strong> {movie.description}</p>
        {/* Pass the whole movie/show object along so TicketBooking knows
            which show (and which seats) this booking is for */}
        <button className="book-btn" onClick={() => navigate("/ticket-booking", { state: movie })}>
          Book tickets
        </button>
      </div>
    </div>
  );
}
