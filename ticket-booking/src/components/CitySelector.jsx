import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CitySelector.css";

const cities = [
  { name: "Mumbai", emoji: "🕌" },
  { name: "Delhi-NCR", emoji: "🏙️" },
  { name: "Bengaluru", emoji: "🌆" },
  { name: "Hyderabad", emoji: "🏯" },
  { name: "Ahmedabad", emoji: "🏜️" },
  { name: "Chandigarh", emoji: "🌳" },
  { name: "Chennai", emoji: "🌴" },
  { name: "Pune", emoji: "⛰️" }
];

export default function CitySelector() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [detecting, setDetecting] = useState(false);

  const handleCityClick = (cityName) => {
    localStorage.setItem("selectedCity", cityName);
    navigate("/home");
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setDetecting(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          console.log("Location Data:", data); // ✅ Debugging

          const detectedCity =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.state_district ||
          data.address.county;

          if (detectedCity) {
            localStorage.setItem("selectedCity", detectedCity);
            navigate("/home", { replace: true });
             window.location.reload();
          } else {
            alert("Could not detect your city.");
          }
        } catch (error) {
          console.error(error);
          alert("Error detecting location.");
        } finally {
          setDetecting(false);
        }
      },
      (error) => {
        console.error(error);
        alert("Unable to retrieve your location.");
        setDetecting(false);
      }
    );
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overlay">
      <div className="city-modal">
        <h2>Select Your City</h2>
        <p className="subtitle">Popular Cities</p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for your city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="city-search"
        />

        {/* Detect My Location Button */}
        <button
          className="detect-location-btn"
          onClick={handleDetectLocation}
          disabled={detecting}
        >
          📍 {detecting ? "Detecting..." : "Detect My Location"}
        </button>

        {/* City Grid */}
        <div className="city-grid">
          {filteredCities.map((city, idx) => (
            <div
              className="city-option"
              key={idx}
              onClick={() => handleCityClick(city.name)}
            >
              <span className="city-emoji">{city.emoji}</span>
              <p>{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}







