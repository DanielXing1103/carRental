import sales from "../../image/salesmen.jpg";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-details">
        <img src={sales} alt="Salesmen" className="sales" />
        <div className="about-container">
          <p className="about-subtitle">About Us</p>
          <p className="about-title">
            Welcome to <span>carRental</span> - Your Trusted Partner for
            Convenient Travel Solutions!
          </p>
          <p className="about-details">
            At carRental, we believe in unlocking the freedom of
            exploration for every traveler. Our passion for exceptional service
            and our extensive fleet of top-notch vehicles make us the premier
            choice for all your car rental needs. Whether you're embarking on a
            thrilling adventure or simply need a reliable ride for your daily
            commute, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
