import Navbar from "../components/nav_bar/navbar";
import Submitted from "../components/confirmation/submitted";
import "../components/date/date.css";
import "./style.css";

const ConfirmationPage = () => {
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#2779a7", 
        height: "100%",
        minHeight: "50vw",
        padding: "9px",
        margin: "-10px",
      }}
    >
      <Navbar />
      <div className="pad"></div>

      <Submitted />
    </div>
  );
};

export default ConfirmationPage;
