import Navbar from "../components/nav_bar/navbar";
import SideTop from "../components/sideTop/sideTop";
import Bookcars from "../components/cars/bookcars.jsx";
import Footer from "../components/footer/footer";
import BlackBanner from "../components/blackbanner/blackbanner";

import { useState } from "react";
import "./style.css";

const Rentals = () => {
  const [display, setDisplay] = useState(2); //controls page display

  return (
    <div className="page">
      <Navbar />
      <SideTop title={"Rentals"} path={"Home/Rentals"} />
      <div className="rental-page">
        <Bookcars display={display} setDisplay={setDisplay} rentalPage={true} />
      </div>
      <div className="pad"></div>
      <BlackBanner />
      <Footer />
    </div>
  );
};

export default Rentals;
