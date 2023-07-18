import Navbar from "../components/nav_bar/navbar";
import SideTop from "../components/sideTop/sideTop";
import Footer from "../components/footer/footer";

const ContactPage = () => {
  return (
    <div className="page">
      <Navbar />
      <SideTop title ="Contact" path = "Home/Contact" />


    </div>
  );
};

export default ContactPage;
