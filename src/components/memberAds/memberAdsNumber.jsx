const adsList = [
  { id: "1", title: "6M+", description: "Lazuli Plus Rewards members" },
  { id: "2", title: "3M", description: "Complimentary upgrades" },
  { id: "3", title: "1.5M", description: "Free rental car days" },
];
const AdsNumbers = () => {
  return (
    <div className="ads">
      <div className="ads-container">
        {adsList.map((ads) => {
          const { title, description,id } = ads;
          return (
            <div className="ads-unit" key={id}>
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
