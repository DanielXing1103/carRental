import sales from "../../image/salesmen/salesmen.jpg";
import sales2 from "../../image/salesmen/salesmen2.png";
import Divider from "../divider/divider1";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-details">
        <img src={sales} alt="Salesmen" className="sales" />
        <div className="about-container">
          <p className="about-subtitle">About Us</p>
          <p className="about-title">
            Welcome to <span className="blue">carRental</span> Your Trusted
            Partner for Convenient Travel Solutions!
          </p>
          <p className="about-details">
            At carRental, we believe in unlocking the freedom of exploration for
            every traveler. Our passion for exceptional service and our
            extensive fleet of top-notch vehicles make us the premier choice for
            all your car rental needs. Whether you're embarking on a thrilling
            adventure or simply need a reliable ride for your daily commute,
            we've got you covered.
          </p>
        </div>
      </div>
      <Divider />
      <div className="welcome-details">
        <div className="about-container">
          <p className="about-subtitle">Membership</p>
          <p className="about-title">
            <span className="blue">Lazuli Plus</span> Rewards®
          </p>
          <p className="about-details">
            Lazuli Plus is the epitome of luxury and adventure in the world of
            car rentals. As a member, you'll experience seamless reservations,
            personalized attention from our dedicated concierge team, and
            complimentary upgrades that add a touch of opulence to your
            journeys. Our exclusive partnerships with luxury hotels and fine
            dining establishments further elevate your travel experience. With
            safety and reliability as our core values, you can explore the world
            with peace of mind. Lazuli Plus isn't just a membership; it's a
            community of like-minded travelers who share a passion for
            extraordinary journeys. Join us and unlock a world of unparalleled
            travel experiences.
          </p>
        </div>
        <img src={sales2} alt="Salesmen" className="sales" />
      </div>
    </div>
  );
};

export default Welcome;
