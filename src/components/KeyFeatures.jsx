import React from "react";
import "../css/KeyFeatures.css";
import blogIcon from "../assets/blogIcon.png";
import liveSessionsIcon from "../assets/liveSessionsIcon.png";
import contentCreationIcon from "../assets/contentCreationIcon.png";
import workoutVideosIcon from "../assets/workoutVideosIcon.png";

const KeyFeatures = () => {
  return (
    <section className="key-features">
      <div className="key-features__content">
        <h2 className="key-features__title">Key Features</h2>
        <div className="key-features__grid">
          {/* Feature Cards */}
          <div className="key-feature">
            <img
              src={blogIcon}
              alt="Blog Writing"
              className="key-feature__icon"
            />
            <p className="key-feature__title">Blog Writing</p>
            <span>Coaches can write blogs</span>
          </div>

          <div className="key-feature">
            <img
              src={liveSessionsIcon}
              alt="Live Sessions"
              className="key-feature__icon"
            />
            <p className="key-feature__title">Live Sessions</p>
            <span>Coaches can create live sessions</span>
          </div>

          <div className="key-feature">
            <img
              src={contentCreationIcon}
              alt="Content Creation"
              className="key-feature__icon"
            />
            <p className="key-feature__title">Content Creation</p>
            <span>Coaches can create content</span>
          </div>

          <div className="key-feature">
            <img
              src={workoutVideosIcon}
              alt="Workout Videos"
              className="key-feature__icon"
            />
            <p className="key-feature__title">Workout Videos</p>
            <span>Coaches can create workout videos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
