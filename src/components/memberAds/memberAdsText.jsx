import car from "../../image/car-background/car-background-3.webp";
const AdsText = () => {
  return (
    <div className="center">
      <img src={car} alt="car" className="ads-car" />
      <p className="ads-title">
        Join the #1 car rental loyalty program for free.*
      </p>
      <p className="ads-content">
        Skip the counter and head straight to your car when you join our Lazuli
        Plus Rewards® - no waiting, no stopping. Get on the road faster and
        easier while earning points redeemable for free rental days and
        upgrades.
      </p>
    </div>
  );
};

export default AdsText;
