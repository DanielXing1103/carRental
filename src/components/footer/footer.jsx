import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import titles from "../nav_bar/data";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div className="footer-unit">
          <p className="footer-title">carRental</p>
          <p>
            "Explore the perfect wheels for your journey. carRental offers a
            wide selection of vehicles for all your driving needs."
          </p>
          <div className="phone">
            <span className="phone-icon">
              <AiFillPhone />
            </span>
            <span className="phone-number">(123) 456-7890</span>
          </div>
          <div className="email">
            <span className="email-icon">
              <AiOutlineMail />
            </span>
            <span className="email-address">carrental@gmail.com</span>
          </div>
        </div>
        <div className="footer-unit">
          <p className="footer-title">WEBSITE</p>
          {titles.map((title) => {
            const { id, name, url } = title;
            return (
              <a className="footer-url" href={url} key={id}>
                {name}
              </a>
            );
          })}
        </div>
        <div className="footer-unit">
          <p className="footer-title">WORKING HOURS</p>
          <p className="footer-text">Mon - Fri: 9:00AM - 5:00PM</p>
          <p className="footer-text">Sat: 9:00AM - 13:00PM</p>
          <p className="footer-text">Sun: Closed</p>
        </div>
        <div className="footer-unit">
          <p className="footer-title">SUBSCRIPTION</p>
          <p className="footer-text">
            Subscribe to get the latest new & updates
          </p>
          <input
            type="text"
            className="footer-sub"
            placeholder="Enter Your Email"
          />
          <button className="colored-button">Subscribe</button>
        </div>
      </div>
      <div className="center">
        <p className="copyright">
          Copyright 2023 © carRental | All Rights Reserved
        </p>
      </div>{" "}
    </div>
  );
};

export default Footer;
