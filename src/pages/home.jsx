import Navbar from "../components/nav_bar/navbar";
import Top from "../components/top/top";
import ThreeTopic from "../components/threeTopic/threeTopic";
import "./style.css";
import "./home.css"
const Home = () => {
  return (
    <div className="page">
      <Navbar />
      <Top />
      <ThreeTopic/>
    </div>
  );
};

export default Home;
