
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar({ darkMode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="logo">🎟 TicketBook</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/contact">Contact</Link>
        {user && <Link to="/booking-history">My Bookings</Link>}
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Movies, Events, Sports..."
        />
        <button>🔍</button>
      </div>

      {user ? (
        <div className="auth-nav">
          <span className="welcome-text">Hi, {user.name}</span>
          <button className="toggle-btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth-nav">
          <Link to="/login" className="nav-auth-link">Login</Link>
          <Link to="/signup" className="nav-auth-link">Sign Up</Link>
        </div>
      )}

      <button className="toggle-btn" onClick={toggleMode}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

