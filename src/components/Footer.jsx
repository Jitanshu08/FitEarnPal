import React from "react";
import "../css/Footer.css";
import logo from "../assets/FitEarn.png"; // Updated logo
import apple from "../assets/apple.png";
import playstore from "../assets/playstore.png";
import emailIcon from "../assets/email.png";
import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import pinterestIcon from "../assets/pinterest.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Left Section */}
        <div className="footer__section footer__about">
          <div className="footer__logo-wrapper">
            <img src={logo} alt="FitnEarnPal Logo" className="footer__logo" />
            <span className="footer__title">FitnEarnPal</span>
          </div>
          <p className="footer__description">
            FitnEarnPal is your all-in-one place where you can train people as
            per your schedule. It’s a place where you can upload workout videos,
            create live sessions, write blogs, and much more. Available on
            Android and iOS. Join our community of coaches today!
          </p>
          <p className="footer__email">
            <img src={emailIcon} alt="Email Icon" /> help-support@fitnearn.com
          </p>
          <div className="footer__socials">
            <a href="https://x.com/fitnearn" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/BeFitGetRich/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://in.pinterest.com/FitnEarn/" target="_blank" rel="noopener noreferrer">
              <img src={pinterestIcon} alt="Pinterest" />
            </a>
            <a href="https://www.instagram.com/FitnEarn/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Center Section - Useful Links and Policies */}
        <div className="footer__section">
          <h3 className="footer__section-title">Useful Links</h3>
          <ul className="footer__links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#sign-up">Sign Up Form</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__section-title">Policies</h3>
          <ul className="footer__links">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms-conditions">Terms & Conditions</a>
            </li>
            <li>
              <a href="#data-deletion">Data Deletion</a>
            </li>
          </ul>
        </div>

        {/* Right Section - App Downloads */}
        <div className="footer__section footer__downloads">
          <h3 className="footer__section-title">Download Now</h3>
          <a
            href="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta-btn app-store"
          >
            <img src={apple} alt="Apple Logo" />
            <div>
              <span className="hero__cta-btn-small-text">Download on the</span>
              <span className="hero__cta-btn-large-text">App Store</span>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.fitearn.meditate&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta-btn google-play"
          >
            <img src={playstore} alt="Google Play Logo" />
            <div>
              <span className="hero__cta-btn-small-text">Get it on</span>
              <span className="hero__cta-btn-large-text">Google Play</span>
            </div>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <p className="footer__left">&copy; 2024 FitnEarnPal. All Rights Reserved.</p>
        <p className="footer__center">Made with ❤️ in India</p>
        <p className="footer__right">Reg@2024</p>
      </div>
    </footer>
  );
};

export default Footer;
