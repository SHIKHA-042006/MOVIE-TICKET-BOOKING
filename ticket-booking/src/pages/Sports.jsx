import React from 'react'
import "./Sports.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sports  () {

  const location=useLocation();
  const sport=location.state;
  const navigate = useNavigate();

  return (
    


 <div className="sportbooking-container">
      {/* Left Side: Poster */}
      <div className="sport-section">
        <img src={sport.img} alt={sport.name} className="sport-poster" />
        <p className="sportin-cinema">In cinemas</p>
      </div>

      {/* Right Side: Details */}
      <div className="sportdetails-section">
        <h1 className="sport-title">{sport.name}</h1>
        <p className="sport-rating">⭐ {sport.rating} ({sport.votes} Votes)</p>

        <div className="sporttags">
          <span>{sport.venue}</span>
          <span>{sport.price}</span>
        </div>

        <p className="sportinfo">
          {sport.type} . {sport.organizer} • {sport.duration} • {sport.description}.{sport.agelimit}
        </p>

        {/* <button className="sportbook-btn">Book tickets</button> */}
         <button className="book-btn" onClick={()=>navigate("/ticket-booking")}>Book tickets</button>
      </div>
    </div>
  
  );
}

export default Sports;
