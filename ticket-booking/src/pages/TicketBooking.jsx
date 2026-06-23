import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import "./TicketBooking.css";

function TicketBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  // The movie/show object passed from MovieInfo (includes _id, price, etc.)
  const showFromState = location.state;

  const [show, setShow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Fetch the latest seat availability from the server (not just what
  // was passed in state), so the seat map is always accurate.
  useEffect(() => {
    if (!showFromState?._id) {
      setLoading(false);
      return;
    }
    const fetchShow = async () => {
      try {
        const res = await api.get(`/shows/${showFromState._id}`);
        setShow(res.data);
      } catch (err) {
        setError("Could not load seat availability.");
      } finally {
        setLoading(false);
      }
    };
    fetchShow();
  }, [showFromState]);

  if (!showFromState?._id) {
    return <p className="ticket-status">No show selected. Please go back to Movies and pick one.</p>;
  }

  if (loading) return <p className="ticket-status">Loading seats...</p>;
  if (!show) return <p className="ticket-status">{error || "Something went wrong."}</p>;

  const toggleSeat = (seatNumber, status) => {
    if (status === "booked") return; // can't select an already booked seat
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber) // unselect
        : [...prev, seatNumber] // select
    );
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setError("");

    if (!user) {
      navigate("/login");
      return;
    }
    if (selectedSeats.length === 0) {
      setError("Please select at least one seat.");
      return;
    }

    setSubmitting(true);
    try {
      await api.post("/bookings", { showId: show._id, seats: selectedSeats });
      navigate("/booking-history");
    } catch (err) {
      // If someone else booked the same seat first, the backend returns
      // a 409 — refresh the seat map so the user sees the real state.
      setError(err.response?.data?.message || "Booking failed. Please try again.");
      const res = await api.get(`/shows/${show._id}`);
      setShow(res.data);
      setSelectedSeats([]);
    } finally {
      setSubmitting(false);
    }
  };

  // Group the flat seats array into rows by their letter (A, B, C...)
  const rows = {};
  show.seats.forEach((seat) => {
    const rowLetter = seat.seatNumber[0];
    if (!rows[rowLetter]) rows[rowLetter] = [];
    rows[rowLetter].push(seat);
  });

  const total = selectedSeats.length * show.price;

  return (
    <div className="ticket-booking-container">
      <h1>{show.title}</h1>
      <p className="show-meta">{show.theater} • {show.date} • {show.time}</p>

      {error && <p className="ticket-error">{error}</p>}

      <div className="screen-label">SCREEN THIS WAY</div>

      <div className="seat-map">
        {Object.keys(rows).sort().map((rowLetter) => (
          <div className="seat-row" key={rowLetter}>
            <span className="row-label">{rowLetter}</span>
            {rows[rowLetter].map((seat) => (
              <button
                type="button"
                key={seat.seatNumber}
                disabled={seat.status === "booked"}
                onClick={() => toggleSeat(seat.seatNumber, seat.status)}
                className={
                  "seat " +
                  (seat.status === "booked"
                    ? "booked"
                    : selectedSeats.includes(seat.seatNumber)
                    ? "selected"
                    : "available")
                }
              >
                {seat.seatNumber}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="seat-legend">
        <span><span className="seat available legend-swatch"></span> Available</span>
        <span><span className="seat selected legend-swatch"></span> Selected</span>
        <span><span className="seat booked legend-swatch"></span> Booked</span>
      </div>

      <form onSubmit={handleBooking} className="ticket-booking-form">
        <p>Selected seats: {selectedSeats.join(", ") || "None"}</p>
        <p>Total: ₹{total}</p>
        <button type="submit" disabled={submitting}>
          {submitting ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}

export default TicketBooking;
