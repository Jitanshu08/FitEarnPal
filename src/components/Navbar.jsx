import React from "react";
import logo from "../assets/FitEarn.png"; // Updated logo file path
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="FitnEarnPal Logo" />
        <span className="navbar__title">FitnEarnPal</span> {/* Added title */}
      </div>
      <nav className="navbar__links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
      </nav>
      <div className="navbar__cta">
        <button className="navbar__signup">Sign Up Form</button>
      </div>
    </header>
  );
};

export default Navbar;
