import Navbar from "../components/nav_bar/navbar";
import Submitted from "../components/confirmation/submitted";
import "../components/date/date.css";
import "./style.css";
import Footer from "../components/footer/footer";

const ConfirmationPage = () => {
  return (
    <div className="page" style={{ margin: "-10px" }}>
      <div
        style={{
          backgroundColor: "#2779a7",
          height: "100%",
          minHeight: "50vw",
          padding: "9px",
        }}
      >
        <Navbar />
        <div className="pad"></div>

        <Submitted />
      </div>
      <Footer/>
    </div>
  );
};

export default ConfirmationPage;
