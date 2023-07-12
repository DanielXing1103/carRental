import Navbar from "../components/nav_bar/navbar";
import Top from "../components/top/top";
import ThreeTopic from "../components/threeTopic/threeTopic";
import FleetSlide from "../components/fleetSlider/fleetSlider";
import AdsText from "../components/memberAds/memberAdsText";

import Divider from "../components/divider/divider1";
import "./style.css";
import "./home.css";

const Home = () => {
  return (
    <div className="page">
      <Navbar />
      <Top />
      <Divider />
      <ThreeTopic />
      <Divider />
      <FleetSlide />
      <Divider />
      <AdsText />
    </div>
  );
};

export default Home;
