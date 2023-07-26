import Navbar from "../components/nav_bar/navbar";
import Signup from "../components/auth/signUp";
import Footer from "../components/footer/footer";
import "./style.css";

const SignUpPage = () => {
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
        <Signup />
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
