import React from "react";
import "../css/BecomeCoach.css";
import phoneOne from "../assets/phoneOne.png";
import phoneTwo from "../assets/phoneTwo.png";
import apple from "../assets/apple.png";
import playstore from "../assets/playstore.png";

const BecomeCoach = () => {
  return (
    <section className="become-coach">
      <div className="become-coach__content">
        <h2 className="become-coach__title">
          Become <span>Coach </span>Today
        </h2>
        <div className="become-coach__phones">
          <img src={phoneOne} alt="Phone One" className="become-coach__phone" />
          <img src={phoneTwo} alt="Phone Two" className="become-coach__phone" />
        </div>
        <div className="become-coach__cta">
          {/* App Store Button */}
          <a
            href="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hero__cta-btn app-store">
              <img src={apple} alt="Apple Logo" />
              <div>
                <span className="hero__cta-btn-small-text">
                  Download on the
                </span>
                <span className="hero__cta-btn-large-text">App Store</span>
              </div>
            </button>
          </a>

          {/* Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.fitearn.meditate&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
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
    </section>
  );
};

export default BecomeCoach;
