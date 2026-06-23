import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./BookingHistory.css";

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await api.get("/bookings/my");
        setBookings(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user, navigate]);

  const handleCancel = async (id) => {
    try {
      await api.delete(`/bookings/${id}`);
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: "cancelled" } : b))
      );
    } catch (err) {
      alert(err.response?.data?.message || "Failed to cancel booking");
    }
  };

  if (loading) return <p className="booking-history-status">Loading your bookings...</p>;
  if (error) return <p className="booking-history-status">{error}</p>;

  return (
    <div className="booking-history-container">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="booking-history-status">You haven't booked any tickets yet.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((b) => (
            <div key={b._id} className={`booking-card ${b.status}`}>
              <div className="booking-info">
                <h3>{b.show?.title || "Movie"}</h3>
                <p>{b.show?.theater} • {b.show?.date} • {b.show?.time}</p>
                <p>Seats: {b.seats.join(", ")}</p>
                <p>Total: ₹{b.totalAmount}</p>
                <span className={`status-badge ${b.status}`}>{b.status}</span>
              </div>
              {b.status === "confirmed" && (
                <button className="cancel-btn" onClick={() => handleCancel(b._id)}>
                  Cancel
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
