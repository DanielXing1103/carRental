import Navbar from "../components/nav_bar/navbar";
import SideTop from "../components/sideTop/sideTop";
import Footer from "../components/footer/footer";
import Contact from "../components/contact/contact";
import Accordion from "../components/accordion/accordion";
const ContactPage = () => {
  return (
    <div className="page">
      <Navbar />
      <SideTop title="Contact" path="Home/Contact" />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
