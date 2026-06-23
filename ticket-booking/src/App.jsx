 

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import MovieCard from "./components/MovieCard.jsx";
import { useState } from "react";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Booking from "./pages/Booking";
import MovieInfo from "./pages/MovieInfo.jsx";
import TicketBooking from "./pages/TicketBooking.jsx";
 import Contact from "./pages/Contact";
 import Sports from "./pages/Sports";
 import "./App.css"; 

 import Footer from "./components/Footer";

import CitySelector from "./components/CitySelector"; // ✅ New City Selector page
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookingHistory from "./pages/BookingHistory";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <AuthProvider>
     <div className={darkMode ? "app dark" : "app light"}>
    <>
      <Navbar  darkMode={darkMode} toggleMode={() => setDarkMode(!darkMode)}/>
      <Routes>
        <Route path="/" element={<CitySelector />} /> {/* Show first */}
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/sports" element={<Sports/>}></Route>
        
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie-info" element={<MovieInfo />}/>
           <Route path="/ticket-booking" element={<TicketBooking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          {/* <Route path="/" element={<MovieCard />} /> */}

      </Routes>
      <Footer />
    </>
    </div>
    </AuthProvider>
  );
}

export default App;
