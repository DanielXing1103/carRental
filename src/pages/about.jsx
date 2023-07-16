import Navbar from "../components/nav_bar/navbar";
import SideTop from "../components/sideTop/sideTop";
import Welcome from "../components/about/welcome";
import "./style.css";

const About = () => {
  return (
    <div className="page">
      <Navbar />
      <SideTop title={"About"} path="Home/About" />
      <Welcome />
    </div>
  );
};

export default About;
