import Navbar from "../components/nav_bar/navbar";
import SideTop from "../components/sideTop/sideTop";

import Testimonials from "../components/testimonials/testimonials";
import Footer from "../components/footer/footer";
const TestimonialsPage = () => {
  return (
    <div className="page">
      <Navbar />
      <SideTop title="Testimonials" path="Home/Testimonials" />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default TestimonialsPage;
