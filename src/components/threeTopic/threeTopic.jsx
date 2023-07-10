import React from "react";
import agent from "../../image/icon/agent.png";
import drive from "../../image/icon/drive.png";
import car from "../../image/icon/selectCar.png";

const Section = () => {
  return (
    <div className="white-container">
      <div className="center">
        <h2>Plan your trip now</h2>
        <p className="topic-title">Quick & easy car rental</p>
        <div className="pad"></div>
      </div>
      <div className="topic-content">
        <div className="center">
          <img src={car} alt="select car" className="topic-icon" />
          <h1>Find Your Car</h1>
          <p>
            Discover a wide selection of vehicles for any journey. Browse our
            inventory and find the perfect car that matches your preferences.
          </p>
        </div>
        <div className="center">
          <img src={agent} alt="agent" className="topic-icon" />
          <h1>Contact Us</h1>
          <p>
            Get personalized assistance from our dedicated team. Contact us for
            inquiries, availability, or any specific requirements you have.
          </p>
        </div>
        <div className="center">
          <img src={drive} alt="drive" className="topic-icon" />
          <h1>Start Driving</h1>
          <p>
            Hit the road with confidence in our reliable and well-maintained
            vehicles. Your comfort and safety are our top priorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
