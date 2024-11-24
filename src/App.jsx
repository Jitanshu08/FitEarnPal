import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JoinCommunity from "./components/JoinCommunity";
import WhatCoachGets from "./components/WhatCoachGets";
import KeyFeatures from "./components/KeyFeatures";
import BecomeCoach from "./components/BecomeCoach";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import "./css/App.css"; // Default global styles

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <section id="home">
          <HeroSection />
        </section>

        <JoinCommunity />

        <WhatCoachGets />
        <section id="features">
          <KeyFeatures />
        </section>

        <BecomeCoach />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default App;
