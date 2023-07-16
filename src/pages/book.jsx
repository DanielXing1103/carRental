import Navbar from "../components/nav_bar/navbar";
import Date from "../components/date/date";
import "./style.css";

const book = () => {
return (
  <div className="page" style={{ backgroundColor: "#2779a7", height:"100%", minHeight:"50vw", padding:"9px", margin:"-10px"}}>
    <Navbar />
    <Date />
  </div>
);

};

export default book;
