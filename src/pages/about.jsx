import Navbar from "../components/nav_bar/navbar";
import SideTop from "../components/sideTop/sideTop";
import Welcome from "../components/about/welcome";
import Divider from "../components/divider/divider1";
import OurPeople from "../components/about/ourPeople";
import Section from "../components/threeTopic/threeTopic";
import Footer from "../components/footer/footer";
import "./style.css";

const About = () => {
  return (
    <div className="page">
      <Navbar />
      <SideTop title={"About"} path="Home/About" />
      <Welcome />
      <Divider />
      <OurPeople />
      <Divider />
      <Section />
      <Footer />
    </div>
  );
};

export default About;
