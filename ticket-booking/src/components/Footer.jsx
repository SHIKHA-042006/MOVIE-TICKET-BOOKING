import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPinterest
} from "react-icons/fa";


export default function Footer() {
  const socialLinks = [
   { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaPinterest />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
   ];

  return (
    <footer className="footer">
      {/* Top Section - Categories */}
      <div className="footer-top">
        <div>
          <h4>PLAYS IN TOP CITIES</h4>
          <p>
            Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | 
            Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi
          </p>
        </div>
        <div>
          <h4>ACTIVITIES IN TOP CITIES</h4>
          <p>
            Activities in Mumbai | Activities in Delhi-NCR | Activities in Chennai | Activities in Bengaluru | 
            Activities in Pune | Activities in Ahmedabad | Activities in Kolkata | Activities in Kochi
          </p>
        </div>
        <div>
          <h4>MOVIES NOW SHOWING</h4>
          <p>
            War 2 | Coolie | Mahavatar Narsimha | Su From So | Coolie: The Powerhouse (Hindi) | 
            Dhumketu | Adventure of Jetcat 7D - Combo | Roller Coaster 7D - Combo | Adventure of Iceberg 7D - Combo | Sumathi Valavu
          </p>
        </div>
        <div>
          <h4>COUNTRIES</h4>
          <p>Indonesia | Singapore | Sri Lanka | West Indies</p>
        </div>
        <div>
          <h4>HELP</h4>
          <p>
            About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap | 
            Terms and Conditions | Privacy Policy
          </p>
        </div>
        <div>
          <h4>BOOKMYSHOW EXCLUSIVES</h4>
          <p>
            Lollapalooza India | BookAChange | Corporate Vouchers | Gift Cards | 
            List My Show | Offers | Stream | Trailers
          </p>
        </div>
      </div>

      {/* Middle Section - Logo + Social */}
      <div className="footer-middle">
        <img src="/logo.png" alt="Logo" className="footer-logo" />
        <div className="social-icons">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section - Disclaimer */}
      <div className="footer-bottom">
        <p>
          The content and images used on this site are copyright protected and copyrights 
          vest with the respective owners. The usage of the content and images on this 
          website is intended to promote the works and no endorsement of the artist shall 
          be implied. Unauthorized use is prohibited and punishable by law.
        </p>
        <p>
          Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
