import Navbar from "../components/nav_bar/navbar";
import Login from "../components/auth/login";
import Footer from "../components/footer/footer";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="page" style={{ margin: "-10px" }}>
      <div
        style={{
          backgroundColor: "#2779a7",
          height: "100%",
          padding: "9px",
        }}
      >
        <Navbar />
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
