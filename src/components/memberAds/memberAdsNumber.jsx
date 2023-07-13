const adsList = [
  { title: "6M+", description: "Lazuli Plus Rewards members" },
  { title: "3M", description: "Complimentary upgrades" },
  { title: "1.5M", description: "Free rental car days" },
];
const AdsNumbers = () => {
  return (
    <div className="ads">
      <div className="ads-container">
        {adsList.map((ads) => {
          const { title, description } = ads;
          return (
            <div className="ads-unit">
              <p className="num-title">{title}</p>
              <p className="num-description">{description}</p>
            </div>
          );
        })}
      </div>
      <div className="center">
        <a href="/about" className="colored-button">
          Find details
        </a>
      </div>
    </div>
  );
};

export default AdsNumbers;
