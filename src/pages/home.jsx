import Navbar from "../components/nav_bar/navbar";
import Top from "../components/top/top";
import ThreeTopic from "../components/threeTopic/threeTopic";
import divider from "../image/divider.png";
import FleetSlide from "../components/fleetSlider/fleetSlider";

import "./style.css";
import "./home.css";

const Home = () => {
  return (
    <div className="page">
      <Navbar />
      <Top />
      <div className="center">
        <img src={divider} alt="divider" className="divider" />
      </div>
      <ThreeTopic />
      <div className="center">
        <img src={divider} alt="divider" className="divider" />
      </div>
      <FleetSlide />
    </div>
  );
};

export default Home;
