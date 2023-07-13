import Data from "./testimonialsData";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="review-container">
      <div className="center">
        <p className="review-subtitle">Reviewed by people</p>
        <p className="review-title">Client's Testimonials</p>
        <p className="review-description">
          Discover the impact of our service through client testimonials. Read
          their positive experiences and make an informed decision. Join our
          satisfied customers for a remarkable car rental journey.
        </p>
      </div>
      <div className="review-units">
        {Data.map((people) => {
          const { id, name, location, image, text } = people;
          return (
            <div className="review-unit" key={id}>
              <img src={image} alt="image" className="review-image" />
              <h3 className="review-name">{name}</h3>
              <p className="review-location">{location}</p>
              <p className="review-text">
                <span>"</span>
                {text}
                <span>"</span>
              </p>
                <FaQuoteRight className="qoute"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
