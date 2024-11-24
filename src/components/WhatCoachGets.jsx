import React from "react";
import "../css/WhatCoachGets.css";
import globalAccessIcon from "../assets/globalicon.png";
import personalBrandIcon from "../assets/brandIcon.png";
import revenueIcon from "../assets/RevenIcon.png";
import selfScheduleIcon from "../assets/calenderIcon.png";
import phoneCenter from "../assets/coachPhone.png";
import eclipseImage from "../assets/eclipseB.png";
import smallEclipseImage from "../assets/eclipseS.png";

const WhatCoachGets = () => {
  return (
    <section className="what-coach">
      <div className="what-coach__content">
        <h2 className="what-coach__title">
          What's in it for <span>Coach</span>
        </h2>
        <p className="what-coach__subtitle">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          providing valuable health and fitness insights to users.
        </p>
      </div>

      <div className="what-coach__container">
        {/* Eclipse Backgrounds */}
        <img
          src={eclipseImage}
          alt="Eclipse Background"
          className="what-coach__eclipse animate-spin"
        />
        <img
          src={smallEclipseImage}
          alt="Small Eclipse Background"
          className="what-coach__small-eclipse animate-pulse"
        />

        {/* Center Phone Image */}
        <img
          src={phoneCenter}
          alt="Phone with dashboard"
          className="what-coach__phone animate-fade-in"
        />

        <div
          className="what-coach__item global-access text-right animate-slide-up"
        >
          <img src={globalAccessIcon} alt="Global Audience Access" />
          <p>Global Audience Access</p>
          <span>Helps you gain a global audience</span>
        </div>

        <div
          className="what-coach__item personal-brand text-left animate-slide-up"
        >
          <img src={personalBrandIcon} alt="Personal Brand" />
          <p>Personal Brand</p>
          <span>Helps you grow your global audience</span>
        </div>

        <div
          className="what-coach__item revenue text-right animate-slide-up"
        >
          <img src={revenueIcon} alt="Revenue Opportunities" />
          <p>Revenue Opportunities</p>
          <span>Helps you earn more revenue</span>
        </div>

        <div
          className="what-coach__item schedule text-left animate-slide-up"
        >
          <img src={selfScheduleIcon} alt="Work on Your Own Schedule" />
          <p>Work on Your Own Schedule</p>
          <span>Helps you stay productive</span>
        </div>
      </div>
    </section>
  );
};

export default WhatCoachGets;
