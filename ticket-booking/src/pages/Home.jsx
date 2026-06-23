
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
// import React, { useState } from "react";
import SportsCard from '../components/SportsCard.jsx'

export default function Home() {
  const navigate = useNavigate();
  //   const [darkMode, setDarkMode] = useState(false);

  // const toggleMode = () => {
  //   setDarkMode(!darkMode);
  // };


    const popularMovies = [
  {
    title: "Avengers: Endgame",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    releaseDate: "April 26, 2019",
    director: "Anthony and Joe Russo",
    producers: "Kevin Feige",
    writers: "Christopher Markus, Stephen McFeely",
    genre: ["Action", "Adventure", "Sci-Fi"],
    runtime: "181 minutes",
    budget: "$356 million",
    boxOffice: "$2.799 billion",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner"],
    music: "Alan Silvestri",
    productionCompany: "Marvel Studios",
    distributor: "Walt Disney Studios Motion Pictures",
    languages: ["English"],
     rating:["9.4"],
    votes:"760",
    awards: "Nominated for Best Visual Effects at the Oscars"
  },

  {
    title: "Avatar",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_(2009_film)_poster.jpg",
    releaseDate: "December 18, 2009",
    director: "James Cameron",
    producers: ["James Cameron", "Jon Landau"],
    writers: "James Cameron",
    genre: ["Action", "Adventure", "Fantasy"],
    runtime: "162 minutes",
    budget: "$237 million",
    boxOffice: "$2.923 billion",
    cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang"],
    music: "James Horner",
    productionCompany: "20th Century Fox, Lightstorm Entertainment",
    distributor: "20th Century Fox",
    languages: ["English", "Na’vi"],
    rating: ["9.6"],
    votes: "270k votes",

    awards: "Won 3 Academy Awards (Best Cinematography, Best Art Direction, Best Visual Effects)"
  },
  {
    title: "Oppenheimer",
    img: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    releaseDate: "July 21, 2023",
    director: "Christopher Nolan",
    producers: ["Emma Thomas", "Charles Roven", "Christopher Nolan"],
    writers: "Christopher Nolan",
    genre: ["Biography", "Drama", "History"],
    runtime: "180 minutes",
    budget: "$100 million",
     rating:"9.4",
    votes:"760",
    boxOffice: "$975 million",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr.", "Florence Pugh"],
    music: "Ludwig Göransson",
    productionCompany: "Syncopy, Atlas Entertainment",
    distributor: "Universal Pictures",
    languages: ["English"],
    awards: "Won Academy Awards including Best Picture and Best Actor (Cillian Murphy)"
  },
  {
    title: "War 2",
    img: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28727_PInM9ELK.jpg",
    releaseDate: "Upcoming (Expected 2025)",
    director: "Ayan Mukerji",
    producers: "Aditya Chopra",
    writers: "Aditya Chopra (story), Shridhar Raghavan",
    genre: ["Action", "Thriller"],
    runtime: "TBA",
    budget: "Estimated ₹300 crore",
     rating:"9.4",
    votes:"760",
    boxOffice: "TBA",
    cast: ["Hrithik Roshan", "Jr. NTR"],
    music: "TBA",
    productionCompany: "Yash Raj Films",
    distributor: "YRF Studios",
    languages: ["Hindi"],
    awards: "TBA"
  },
  {
    title: "Saiyaara",
    img: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/33622_oe1HFYFh.jpg",
    releaseDate: "TBA",
    director: "TBA",
    producers: "TBA",
    writers: "TBA",
    genre: ["Romance", "Drama"],
    runtime: "TBA",
    budget: "TBA",
    boxOffice: "TBA",
    cast: ["TBA"],
    music: "TBA",
    productionCompany: "PVR Cinemas (Listed movie)",
    distributor: "TBA",
     rating:"9.4",
    votes:"760",
    languages: ["Hindi"],
    awards: "TBA"
  },
    {
    title: "3 Idiots",
    img: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    releaseDate: "December 25, 2009",
    director: "Rajkumar Hirani",
    producers: "Vidhu Vinod Chopra",
    writers: "Rajkumar Hirani, Abhijat Joshi",
    genre: ["Comedy", "Drama"],
    runtime: "170 minutes",
    budget: "₹55 crore",
    boxOffice: "₹460 crore",
    cast: [
      "Aamir Khan",
      "R. Madhavan",
      "Sharman Joshi",
      "Kareena Kapoor",
      "Boman Irani"
    ],
    music: "Shantanu Moitra",
    productionCompany: "Vinod Chopra Films",
    distributor: "Reliance BIG Pictures",
    languages: ["Hindi"],
    rating: ["9.0"],
    votes: "1.2M",
    awards: "Won Filmfare Award for Best Film"
  },
  {
    title: "Dangal",
    img: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    releaseDate: "December 23, 2016",
    director: "Nitesh Tiwari",
    producers: "Aamir Khan, Kiran Rao, Siddharth Roy Kapur",
    writers: "Nitesh Tiwari, Piyush Gupta, Shreyas Jain, Nikhil Mehrotra",
    genre: ["Biography", "Drama", "Sport"],
    runtime: "161 minutes",
    budget: "₹70 crore",
    boxOffice: "₹2,024 crore",
    cast: [
      "Aamir Khan",
      "Sakshi Tanwar",
      "Fatima Sana Shaikh",
      "Sanya Malhotra",
      "Zaira Wasim"
    ],
    music: "Pritam",
    productionCompany: "Aamir Khan Productions, Walt Disney Pictures India",
    distributor: "UTV Motion Pictures",
    languages: ["Hindi"],
    rating: ["9.1"],
    votes: "900K",
    awards: "Won Filmfare Award for Best Film"
  },
  {
    title: "PK",
    img: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
    releaseDate: "December 19, 2014",
    director: "Rajkumar Hirani",
    producers: "Vidhu Vinod Chopra, Rajkumar Hirani",
    writers: "Rajkumar Hirani, Abhijat Joshi",
    genre: ["Comedy", "Drama", "Sci-Fi"],
    runtime: "152 minutes",
    budget: "₹122 crore",
    boxOffice: "₹854 crore",
    cast: [
      "Aamir Khan",
      "Anushka Sharma",
      "Sushant Singh Rajput",
      "Boman Irani",
      "Sanjay Dutt"
    ],
    music: "Shantanu Moitra, Ajay-Atul, Ankit Tiwari",
    productionCompany: "Vinod Chopra Films, Rajkumar Hirani Films",
    distributor: "UTV Motion Pictures",
    languages: ["Hindi"],
    rating: ["8.6"],
    votes: "850K",
    awards: "Won Filmfare Award for Best Story"
  },
  {
    title: "Bahubali: The Beginning",
    img: "https://wallpapercave.com/wp/wp1851897.jpg",
    releaseDate: "July 10, 2015",
    director: "S. S. Rajamouli",
    producers: "Shobu Yarlagadda, Prasad Devineni",
    writers: "V. Vijayendra Prasad",
    genre: ["Action", "Drama", "Fantasy"],
    runtime: "159 minutes",
    budget: "₹180 crore",
    boxOffice: "₹650 crore",
    cast: [
      "Prabhas",
      "Rana Daggubati",
      "Anushka Shetty",
      "Tamannaah",
      "Ramya Krishnan",
      "Sathyaraj"
    ],
    music: "M. M. Keeravani",
    productionCompany: "Arka Media Works",
    distributor: "Arka Media Works",
    languages: ["Telugu", "Tamil", "Hindi"],
    rating: ["8.5"],
    votes: "700K",
    awards: "Won National Film Award for Best Special Effects"
  },
  {
    title: "RRR",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    releaseDate: "March 25, 2022",
    director: "S. S. Rajamouli",
    producers: "D. V. V. Danayya",
    writers: "V. Vijayendra Prasad",
    genre: ["Action", "Drama", "Historical"],
    runtime: "182 minutes",
    budget: "₹550 crore",
    boxOffice: "₹1,200 crore",
    cast: [
      "N. T. Rama Rao Jr.",
      "Ram Charan",
      "Ajay Devgn",
      "Alia Bhatt",
      "Olivia Morris"
    ],
    music: "M. M. Keeravani",
    productionCompany: "DVV Entertainment",
    distributor: "Pen Studios, Lyca Productions",
    languages: ["Telugu", "Hindi", "Tamil", "Kannada", "Malayalam"],
    rating: ["9.2"],
    votes: "1.1M",
    awards: "Won Academy Award for Best Original Song (Naatu Naatu)"
  },
   {
    title: "Kabir Singh",
    img: "https://wallpapercave.com/wp/wp4548432.jpg",
    releaseDate: "June 21, 2019",
    director: "Sandeep Reddy Vanga",
    producers: "Bhushan Kumar, Krishan Kumar, Murad Khetani, Ashwin Varde",
    writers: "Sandeep Reddy Vanga",
    genre: ["Romance", "Drama"],
    runtime: "173 minutes",
    budget: "₹60 crore",
    boxOffice: "₹380 crore",
    cast: ["Shahid Kapoor", "Kiara Advani", "Soham Majumdar"],
    music: "Mithoon, Amaal Mallik, Sachet–Parampara, Vishal Mishra",
    productionCompany: "T-Series, Cine1 Studios",
    distributor: "AA Films",
    languages: ["Hindi"],
    rating: ["7.0"],
    votes: "300K",
    awards: "Won Filmfare Award for Best Music Album"
  },
  {
    title: "Gully Boy",
    img: "https://wallpapercave.com/wp/wp5485639.jpg",
    releaseDate: "February 14, 2019",
    director: "Zoya Akhtar",
    producers: "Ritesh Sidhwani, Zoya Akhtar, Farhan Akhtar",
    writers: "Zoya Akhtar, Reema Kagti",
    genre: ["Drama", "Music"],
    runtime: "153 minutes",
    budget: "₹84 crore",
    boxOffice: "₹238 crore",
    cast: ["Ranveer Singh", "Alia Bhatt", "Siddhant Chaturvedi", "Kalki Koechlin"],
    music: "Ankur Tewari, Dub Sharma, Divine, Naezy",
    productionCompany: "Tiger Baby, Excel Entertainment",
    distributor: "Zee Studios",
    languages: ["Hindi"],
    rating: ["8.3"],
    votes: "400K",
    awards: "India's official entry to Oscars 2019"
  },
  {
    title: "Chennai Express",
    img: "https://cdn.cinematerial.com/p/297x/dfcwqtyt/chennai-express-indian-movie-poster-md.jpg?v=1456565595",
    releaseDate: "August 9, 2013",
    director: "Rohit Shetty",
    producers: "Gauri Khan, Ronnie Screwvala, Siddharth Roy Kapur",
    writers: "Sajid-Farhad, Yunus Sajawal",
    genre: ["Action", "Comedy", "Romance"],
    runtime: "141 minutes",
    budget: "₹70 crore",
    boxOffice: "₹423 crore",
    cast: ["Shah Rukh Khan", "Deepika Padukone"],
    music: "Vishal-Shekhar",
    productionCompany: "Red Chillies Entertainment",
    distributor: "UTV Motion Pictures",
    languages: ["Hindi", "Tamil"],
    rating: ["7.2"],
    votes: "280K",
    awards: "Won Zee Cine Award for Best Film"
  },
  {
    title: "Zindagi Na Milegi Dobara",
    img: "https://m.media-amazon.com/images/M/MV5BMzQzMTA4ODY4OF5BMl5BanBnXkFtZTcwNjgyMDQxNw@@._V1_.jpg",
    releaseDate: "July 15, 2011",
    director: "Zoya Akhtar",
    producers: "Ritesh Sidhwani, Farhan Akhtar",
    writers: "Zoya Akhtar, Reema Kagti",
    genre: ["Adventure", "Comedy", "Drama"],
    runtime: "155 minutes",
    budget: "₹45 crore",
    boxOffice: "₹153 crore",
    cast: ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol", "Katrina Kaif"],
    music: "Shankar–Ehsaan–Loy",
    productionCompany: "Excel Entertainment",
    distributor: "Eros International",
    languages: ["Hindi"],
    rating: ["8.8"],
    votes: "500K",
    awards: "Won 7 Filmfare Awards including Best Film"
  },
  {
    title: "Padmaavat",
    img: "https://wallpapercave.com/wp/wp2380400.jpg",
    releaseDate: "January 25, 2018",
    director: "Sanjay Leela Bhansali",
    producers: "Sanjay Leela Bhansali, Sudhanshu Vats, Ajit Andhare",
    writers: "Sanjay Leela Bhansali, Prakash Kapadia",
    genre: ["Drama", "History", "Romance"],
    runtime: "164 minutes",
    budget: "₹215 crore",
    boxOffice: "₹585 crore",
    cast: ["Deepika Padukone", "Shahid Kapoor", "Ranveer Singh"],
    music: "Sanjay Leela Bhansali",
    productionCompany: "Bhansali Productions, Viacom18 Motion Pictures",
    distributor: "Viacom18 Motion Pictures",
    languages: ["Hindi"],
    rating: ["7.5"],
    votes: "320K",
    awards: "Won National Film Award for Best Music Direction"
  },
  {
    title: "Phaphey Kuttniyan",
    img: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/33357_vVdQ06zR.jpg",
    releaseDate: "May 6, 2022",
    director: "Rupy Kaur Cheema, Smeep Kang",
    producers: "ZEE Studios, Mohit Banwait, Omjee Star Studios",
    writers: "Rakesh Dhawan",
    genre: ["Comedy", "Drama"],
    runtime: "143 minutes",
    budget: "Approx ₹10 crore",
    boxOffice: "Average hit in Punjab region",
    cast: ["Harby Sangha", "Rubina Bajwa", "Gurpreet Ghuggi", "Binnu Dhillon", "Jasmin Bajwa"],
    music: "Desi Crew",
     rating:"9.4",
    votes:"760",
    productionCompany: "ZEE Studios, Banwait Films",
    distributor: "Omjee Star Studios",
    languages: ["Punjabi"],
    awards: "Nominated for PTC Punjabi Film Awards"
  }
];




  const upcomingEvents = [
    "Rock Concert - 25th Aug",
    "Comedy Night - 28th Aug",
    "Drama Play - 1st Sept",
    "Dance Show - 5th Sept"
  ];

  const goToBooking = (movie) => {
    navigate("/booking", { state: movie });
  };
  // const goToSports = (sport) => {
  //   navigate("/sports", { state: sport });
  // };
  

  return (
    <>
    <div className="home-container">

      {/* Hero Banner */}
      <section className="hero"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1350&q=80)"
        }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Book Your Next Show</h1>
            <p>Fast, simple ticket booking for movies and events. Choose a movie, pick your seats, and you’re done!</p>
            <Link to="/movies" className="btn">Browse Movies</Link>
          </div>
        </div>
      </section>

      {/* Popular Movies */}
      <section className="movies-scroll-section">
        <h2> Popular Movies</h2>
        <div className="scroll-container">
          {popularMovies.map((movie, index) => (
            <div key={index} className="scroll-item clickable" onClick={() => goToBooking(movie)}>
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
              <p>{movie.price}</p>
              <p>{movie.languages}</p>
            </div>
          ))}
        </div>
      </section>

      <SportsCard/>
      {/* Upcoming Events */}
      <section className="upcoming-events">
        <h2>📅 Upcoming Events</h2>
        <ul>
          {upcomingEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </section>

    </div>
    </>
  );
}
