const mongoose = require('mongoose');

// One seat inside a show. status flips from "available" to "booked"
// when someone successfully books it.
const seatSchema = new mongoose.Schema({
  seatNumber: { type: String, required: true }, // e.g. "A1", "B5"
  status: { type: String, enum: ['available', 'booked'], default: 'available' },
});

// A "Show" = one movie playing at one theater, on one date/time.
// It includes the movie's display info (title, poster, etc.) so the
// frontend doesn't need a separate Movie collection.
const showSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: String },
    genre: { type: String },
    releaseDate: { type: String },
    director: { type: String },
    rating: { type: Number },
    duration: { type: String },
    description: { type: String },

    // Showtime details
    theater: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true },

    seats: [seatSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Show', showSchema);
