import React from "react";
import "../css/HowItWorks.css";
import step1Icon from "../assets/step1.png";
import step2Icon from "../assets/step2.png";
import step3Icon from "../assets/step3.png";
import step4Icon from "../assets/step4.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works__content">
        <h2 className="how-it-works__title">How It Works?</h2>
        <div className="how-it-works__steps">
          {/* Step 1 */}
          <div className="how-it-works__step">
            <div className="how-it-works__icon-container">
              <img src={step1Icon} alt="Register" className="how-it-works__icon" />
              <div className="how-it-works__line"></div>
            </div>
            <p className="how-it-works__step-title">Register</p>
            <span>Support for multiple languages, making health monitoring accessible and easy for users around the globe.</span>
          </div>
          {/* Step 2 */}
          <div className="how-it-works__step">
            <div className="how-it-works__icon-container">
              <img src={step2Icon} alt="Verify" className="how-it-works__icon" />
              <div className="how-it-works__line"></div>
            </div>
            <p className="how-it-works__step-title">Verify</p>
            <span>Support for multiple languages, making health monitoring accessible and easy for users around the globe.</span>
          </div>
          {/* Step 3 */}
          <div className="how-it-works__step">
            <div className="how-it-works__icon-container">
              <img src={step3Icon} alt="Create Content" className="how-it-works__icon" />
              <div className="how-it-works__line"></div>
            </div>
            <p className="how-it-works__step-title">Create Content</p>
            <span>Support for multiple languages, making health monitoring accessible and easy for users around the globe.</span>
          </div>
          {/* Step 4 */}
          <div className="how-it-works__step">
            <div className="how-it-works__icon-container">
              <img src={step4Icon} alt="Engage With Users" className="how-it-works__icon" />
            </div>
            <p className="how-it-works__step-title">Engage With Users</p>
            <span>Support for multiple languages, making health monitoring accessible and easy for users around the globe.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
