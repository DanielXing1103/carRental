import "./top.css";

const Top = () => {
  return (
    <div>
      <div className="container">
        <div className="text">
          <h4>Plan your trip now</h4>
          <h1>Save big with our car rental</h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
        </div>
        <div className="reserve-buttons">
          <a href="/book" className="Book-Ride-button">
            Book Ride
          </a>
          <a href="/" className="learn-more-buttons">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
