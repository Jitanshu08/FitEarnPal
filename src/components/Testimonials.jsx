import React from "react";
import "../css/Testimonials.css";
import coachMain from "../assets/coachMain.png"; // Main central coach
import coach1 from "../assets/coach1.png";
import coach2 from "../assets/coach1.png";
import coach3 from "../assets/coach1.png";
import coach4 from "../assets/coach1.png";
import coach5 from "../assets/coach1.png";
import coach6 from "../assets/coach1.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">
        What our <span>Coach</span> Say
      </h2>
      <p className="testimonials__subtitle">
        FitnEarnPal empowers coaches to grow and reach a global audience while
        providing valuable health and fitness insights to users.
      </p>
      <div className="testimonials__container">
        {/* Surrounding Coaches */}
        <img src={coach1} alt="Coach 1" className="testimonial__avatar top-left" />
        <img src={coach2} alt="Coach 2" className="testimonial__avatar middle-left" />
        <img src={coach3} alt="Coach 3" className="testimonial__avatar bottom-left" />
        <img src={coach4} alt="Coach 4" className="testimonial__avatar top-right" />
        <img src={coach5} alt="Coach 5" className="testimonial__avatar middle-right" />
        <img src={coach6} alt="Coach 6" className="testimonial__avatar bottom-right" />

        {/* Main Central Testimonial */}
        <div className="testimonial__main">
        <div className="testimonial__rating">
            {"★".repeat(5)} {/* Static 5-star rating */}
          </div>
          <p className="testimonial__text">
            After joining FitnEarnPal my audience reach has increased and I can
            work according to my time which I liked the most.
          </p>
          <img src={coachMain} alt="Central Coach" className="testimonial__main-avatar" />
          
          <p className="testimonial__name">Coach Name</p>
          <p className="testimonial__role">Yoga Trainer</p>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="testimonials__dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Testimonials;
