import React from "react";
import "../css/HeroSection.css";
import smile from "../assets/smile.png";
import apple from "../assets/apple.png";
import playstore from "../assets/playstore.png";
import phone from "../assets/Phone.png";
import heartStr from "../assets/heartStr.png";
import heart from "../assets/heart.png";
import meditation from "../assets/meditation.png";
import aged from "../assets/aged.png";
import eclipseB from "../assets/eclipseB.png";
import eclipseS from "../assets/eclipseS.png";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__header">
          <img src={smile} alt="Smile Emoji" className="hero__emoji" />
          <h1 className="hero__title typewriter">Hey, Awesome Coach</h1>
        </div>
        <p className="hero__subtitle">
          Expand Your Reach, Inspire More Lives.{" "}
          <span className="gradient-text">Join FitnEarnPal Today!</span>
        </p>
        <p className="hero__description">
          A global platform for coaches to connect, inspire, and change lives.
        </p>
        <div className="hero__cta">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta-link"
          >
            <button className="hero__cta-btn app-store">
              <img src={apple} alt="Apple Logo" />
              <div>
                <span className="hero__cta-btn-small-text">Download on the</span>
                <span className="hero__cta-btn-large-text">App Store</span>
              </div>
            </button>
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta-link"
          >
            <button className="hero__cta-btn google-play">
              <img src={playstore} alt="Google Play Logo" />
              <div>
                <span className="hero__cta-btn-small-text">Get it on</span>
                <span className="hero__cta-btn-large-text">Google Play</span>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="hero__image">
        {/* Background images */}
        <img src={eclipseB} alt="Large Eclipse" className="eclipse eclipseB" />
        <img src={eclipseS} alt="Small Eclipse" className="eclipse eclipseS" />

        {/* Foreground phone and icons */}
        <img src={phone} alt="Mobile App Preview" />
        <img
          src={heartStr}
          alt="Heart with a star"
          className="icon heart-str hover-animate"
        />
        <img src={heart} alt="Heart" className="icon heart hover-animate" />
        <img
          src={meditation}
          alt="Meditation Icon"
          className="icon meditation hover-animate"
        />
        <img src={aged} alt="Aged Icon" className="icon aged hover-animate" />
      </div>
    </section>
  );
};

export default HeroSection;
