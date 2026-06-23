import React from 'react'
import { useNavigate, Link } from "react-router-dom";

  const sportsEvents = [
  {
    name: "RDS Boxing Showdown",
    date: "28 Sep, 5PM",
    venue: "GOLDEN Apple Rohini - Best Weddings & Events",
    price: "₹249 onwards",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1754655111/ivguxlz8aq4kor8ntdw8.jpg",
    type: "Professional Boxing",
    organizer: "RDS Sports Management",
    duration: "3 hours",
    ageLimit: "16+",
    description: "An electrifying evening of professional boxing featuring top national and international fighters.",
    facilities: ["Food stalls", "Parking", "Merchandise"],
    contact: "+91-9876543210",
    ticketPlatform: "BookMyShow"
  },
  {
    name: "DP World India Championship 2025",
    date: "29 Sep, 5PM",
    venue: "Delhi Golf Club: New Delhi",
    price: "₹865 onwards",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453763-jfqhwhcmns-portrait.jpg",
    type: "Golf Tournament",
    organizer: "DP World & Indian Golf Union",
    duration: "4 hours",
    description: "Prestigious golf championship featuring elite players from across the globe.",
    ageLimit: "All ages",

    dressCode: "Smart casuals / Golf attire",
    facilities: ["Clubhouse entry", "Refreshments"],
    contact: "+91-9876543211"
  },
  {
    name: "MARCH FOR INDIA - The Independence Walk",
    date: "17 Aug, 5AM",
    venue: "Your Place Your Time",
    price: "₹249 onwards",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBBdWcgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00437432-mysjuvvrvd-portrait.jpg",
    type: "Marathon Walk",
    organizer: "India Unity Foundation",
    duration: "2–3 hours",
    description: "A patriotic walk to celebrate India's independence with fitness and unity.",
    ageLimit: "All ages",
     rating:"9.4",
    votes:"760",
    facilities: ["Virtual participation", "Medal & Certificate"],
    contact: "+91-9876543212"
  },
  {
    name: "Zen Run Virtual Event",
    date: "19 Sep, 5PM",
    venue: "Your Place Your Time",
    price: "₹349 onwards",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00419058-leasgnmnlu-portrait.jpg",
    type: "Virtual Running Event",
    organizer: "Zen Fitness Club",
    duration: "Flexible",
    description: "Run anywhere, anytime – track your distance via fitness apps and win medals.",
    ageLimit: "12+",
     rating:"9.4",
    votes:"760",
    facilities: ["Medal by courier", "E-certificate"],
    contact: "+91-9876543213"
  },
  {
    name: "Run For The Ocean",
    date: "30 Aug, 2PM",
    venue: "Your Place Your Time",
    price: "₹249 onwards",
    img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-run-for-the-ocean-get-medal-by-courier-0-2024-6-2-t-5-16-26.jpg",
    type: "Virtual Marathon",
    organizer: "Ocean Conservation Foundation",
    duration: "Flexible",
    description: "A virtual run to spread awareness about saving oceans and reducing plastic waste.",
    ageLimit: "All ages",
     rating:"9.4",
    votes:"760",
    facilities: ["Medal courier service", "Digital Certificate"],
    contact: "+91-9876543214"
  },
  {
    name: "Uttar Pradesh Pro Volleyball League",
    date: "28 Sep, 9PM",
    venue: "Shaheed Vijay Singh Pathik Sports Complex: Noida",
    price: "₹199 onwards",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBBdWcgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00456786-gfmtygswgk-portrait.jpg",
    type: "Volleyball Tournament",
    organizer: "UP Volleyball Association",
    duration: "3 hours",
    description: "High-energy volleyball matches featuring professional teams across Uttar Pradesh.",
    ageLimit: "All ages",
    facilities: ["Live commentary", "Food stalls"],
     rating:"9.4",
    votes:"760",
    contact: "+91-9876543215"
  },
  {
    name: "Chess Royale Championship",
    date: "20 Aug, 5PM",
    venue: "Your Place Your Choice",
    price: "₹225 onwards",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00456416-rnzhlenyqs-portrait.jpg",
    type: "Online Chess Tournament",
    organizer: "Chess Royale India",
    duration: "2 hours",
    description: "Test your mind against the best chess players in this thrilling online competition.",
    ageLimit: "10+",
    facilities: ["Live scoreboard", "Digital Certificates"],
    contact: "+91-9876543216",
     rating :"9.4",
    votes:"760"
  },
  {
    name: "Fight Nights Fiesta | Delhi",
    date: "23 Aug - 24 Aug, 4PM",
    venue: "CelGar, Delhi/NCR",
    price: "₹999 onwards",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1755079718/tpoxm53ccg1vrukkx9bz.jpg",
    type: "MMA & Combat Sports",
    organizer: "Fight Nights Promotions",
    duration: "2 days",
    description: "A festival of fight sports – MMA, wrestling, boxing, and celebrity bouts.",
    ageLimit: "18+",
    facilities: ["VIP passes", "Food courts", "Live music"],
    contact: "+91-9876543217",
    rating:"9.4",
    votes:"760"
  }
];

const SportsCard = () => {
  const navigate =useNavigate();
  const goToSports = (sport) => {
    navigate("/sports", { state: sport });
  };
  return (
    <div> <section className="sports-mania">
        <h2> Sports Mania</h2>
        <div className="sports-cards">
          {sportsEvents.map((sport, index) => (
            <div key={index} className="sports-card" onClick ={()=> goToSports(sport)}>
              <img src={sport.img} alt={sport.name} className="sports-img" />
              <div className="sports-info">
                <p className="sports-date">{sport.date}</p>
                <h3 className="sports-name">{sport.name}</h3>
                <p className="sports-venue">{sport.venue}</p>
                <p className="sports-price">{sport.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section></div>
  )
}

export default SportsCard;