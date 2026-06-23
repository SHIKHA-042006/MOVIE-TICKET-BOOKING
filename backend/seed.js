// Run this ONCE (or whenever you want to reset sample data) with:
//   node seed.js
// It connects to your MongoDB, clears old shows, and inserts fresh ones
// using the same movie data your frontend used to have hardcoded.

require('dotenv').config();
const mongoose = require('mongoose');
const Show = require('./models/Show');

const movies = [
  { title: "The Dark Knight", price: 250, imgUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmm8qdOqgzRkGqbtK7Z0iHwLrQVn3jO27ni1RbqoYnLAQNPVhStsUO6-NXT22sI_sRnF-sGPO-ceWGKWfznP0m5GOhIVK9PX72QNlmJax9M2HQjjTAj43Wxd4", genre: "Action, Crime, Drama", releaseDate: "2008-07-18", director: "Christopher Nolan", rating: 9.0, duration: "2h 32m", description: "Batman faces his toughest challenge yet when the Joker brings chaos to Gotham." },
  { title: "Inception", price: 300, imgUrl: "https://m.media-amazon.com/images/I/91Cq0osQP8L.jpg", genre: "Sci-Fi, Thriller", releaseDate: "2010-07-16", director: "Christopher Nolan", rating: 8.8, duration: "2h 28m", description: "A thief who steals corporate secrets through dream-sharing technology is given a chance at redemption." },
  { title: "The Conjuring 2", price: 790, imgUrl: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg", genre: "Horror, Mystery, Thriller", releaseDate: "2016-06-10", director: "James Wan", rating: 7.3, duration: "2h 14m", description: "Paranormal investigators Ed and Lorraine Warren help a single mother facing dark spirits." },
  { title: "Rocky Aur Rani Kii Prem Kahani", price: 800, imgUrl: "https://wallpapercave.com/wp/wp13291218.jpg", genre: "Romance, Drama", releaseDate: "2023-07-28", director: "Karan Johar", rating: 6.9, duration: "2h 48m", description: "A flamboyant Punjabi boy and an intellectual Bengali girl navigate love and family clashes." },
  { title: "Bhola", price: 300, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkGdzwbRuqPJAiZWJIryMWVGQJPSZtJjIFw&s", genre: "Action, Thriller", releaseDate: "2023-03-30", director: "Ajay Devgn", rating: 6.5, duration: "2h 24m", description: "An ex-convict must save his daughter while fighting drug lords and corrupt officials." },
  { title: "Masaan", price: 300, imgUrl: "https://m.media-amazon.com/images/M/MV5BMTU4NTE0NTMyNl5BMl5BanBnXkFtZTgwNjI5MDkxNjE@._V1_FMjpg_UX1000_.jpg", genre: "Drama, Romance", releaseDate: "2015-07-24", director: "Neeraj Ghaywan", rating: 8.1, duration: "1h 49m", description: "A poignant tale of love and loss set on the banks of the Ganges in Varanasi." },
  { title: "Pink", price: 300, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3CWF6fl-PH8eGYuFP3KyBOM1dOQm-uJvXw&s", genre: "Drama, Thriller", releaseDate: "2016-09-16", director: "Aniruddha Roy Chowdhury", rating: 8.1, duration: "2h 16m", description: "Three young women fight a legal battle after being assaulted by influential men." },
  { title: "RRR", price: 300, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVZTcGQrVoQx7SgB4GFg7fkUJdHdb6yp-xw&s", genre: "Action, Drama", releaseDate: "2022-03-25", director: "S. S. Rajamouli", rating: 8.0, duration: "3h 7m", description: "Two legendary revolutionaries fight for India's freedom against British colonial rule." },
  { title: "Interstellar", price: 280, imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg", genre: "Sci-Fi, Adventure, Drama", releaseDate: "2014-11-07", director: "Christopher Nolan", rating: 8.6, duration: "2h 49m", description: "A team of explorers travel through a wormhole to ensure humanity's survival." },
  { title: "IT", price: 890, imgUrl: "https://i.pinimg.com/736x/a5/38/87/a538872f7a0859bed018b787543c4fc2.jpg", genre: "Horror, Thriller", releaseDate: "2017-09-08", director: "Andy Muschietti", rating: 7.3, duration: "2h 15m", description: "A group of kids battle an evil clown terrorizing their small town." },
];

// Builds a simple 5-row x 8-seat grid (A1-A8, B1-B8, ... E1-E8) = 40 seats
function generateSeats() {
  const rows = ["A", "B", "C", "D", "E"];
  const seats = [];
  rows.forEach((row) => {
    for (let num = 1; num <= 8; num++) {
      seats.push({ seatNumber: `${row}${num}`, status: "available" });
    }
  });
  return seats;
}

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  await Show.deleteMany({}); // clear old sample data
  console.log("Cleared existing shows");

  const shows = movies.map((movie) => ({
    ...movie,
    theater: "PVR Cinemas",
    date: "2026-06-28",
    time: "7:00 PM",
    seats: generateSeats(),
  }));

  await Show.insertMany(shows);
  console.log(`Inserted ${shows.length} shows`);

  await mongoose.disconnect();
  console.log("Done. You can now fetch movies from GET /api/shows");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
