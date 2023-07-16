import Navbar from "../components/nav_bar/navbar";
import Top from "../components/homeTop/top";
import ThreeTopic from "../components/threeTopic/threeTopic";
import FleetSlide from "../components/fleetSlider/fleetSlider";
import AdsText from "../components/memberAds/memberAdsText";
import AdsNumber from "../components/memberAds/memberAdsNumber";
import Divider from "../components/divider/divider1";
import BlackBanner  from "../components/blackbanner/blackbanner";
import Testimonials from "../components/testimonials/testimonials.jsx";
import Accordion from "../components/accordion/accordion";
import Footer from "../components/footer/footer";
import "./style.css";

const Home = () => {
  return (
    <div className="page">
      <Navbar />
      <Top />
      <Divider />
      <ThreeTopic />
      <Divider />
      <FleetSlide />
      <BlackBanner />
      <AdsText />
      <AdsNumber />
      <Divider />
      <Testimonials />
      <Divider />
      <Accordion />
      <Footer/>
    </div>
  );
};

export default Home;
