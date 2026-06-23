// src/pages/Booking.jsx
import React, { useState } from "react";
import "./Booking.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const location=useLocation();
  const movie=location.state;
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  // const [seats, setSeats] = useState(1);

  // const handleBooking = (e) => {
  //   e.preventDefault();
  //   alert(`Booking confirmed for ${name} - ${seats} seat(s)`);
  // };

  return (
  

         
         
<div>

 <div className="booking-container">
      {/* Left Side: Poster */}
      <div className="poster-section">
        <img src={movie.img} alt={movie.title} className="movie-poster" />
        <p className="in-cinema">In cinemas</p>
      </div>

      {/* Right Side: Details */}
      <div className="details-section">
        <h1 className="movie-title">{movie.title}</h1>
        <p className="movie-rating">⭐ {movie.rating} ({movie.votes} Votes)</p>

        <div className="tags">
          <span>{movie.format}</span>
          <span>{movie.languages}</span>
        </div>

        <p className="info">
          {movie.runtime} • {movie.genre} • {movie.cast} • {movie.music}.{movie.releaseDate}
        </p>

        <button className="book-btn"onClick={() => navigate("/ticket-booking")}>Book tickets</button>
      </div>
    </div>
  



      
      {/* <h1>Book Your Ticket</h1>
      <form onSubmit={handleBooking} className="booking-form">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Seats:</label>
        <input type="number" min="1" value={seats} onChange={(e) => setSeats(e.target.value)} required />

        <button type="submit">Book Now</button>
      </form> */}
    </div>
  );
}


