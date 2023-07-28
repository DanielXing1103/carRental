import Navbar from "../components/nav_bar/navbar";
import Date from "../components/date/date";
import Footer from "../components/footer/footer";
import "./style.css";

const book = () => {
  return (
    <div className="page">
      <div
        style={{
          margin: "-10px",
          backgroundColor: "#2779a7",
          height: "100%",
          padding: "9px",
        }}
      >
        <Navbar />
        <Date />
      </div>
      <Footer />
    </div>
  );
};

export default book;
