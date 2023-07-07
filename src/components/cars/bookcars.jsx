import { useEffect, useState } from "react";
import "../date/newdate.css";
import { CAR_DATA } from "./car-data";
import Contact from "../contact/contact";
const bookCar = (props) => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(!props.dateDisplay);
  }, [props.dateDisplay]);
  const handleSubmit = (car) => {
    localStorage.setItem("car", JSON.stringify(car));
    setDisplay(false);
  };
  return (
    <div className="container">
      <Contact />
      <div className={display ? "car-content" : "hide"}>
        <div className="text">Book a Car</div>
        <div className="car-display">
          {CAR_DATA.map((car) => {
            const { id, name, price, model, mark, year, image, fuel } = car;
            return (
              <div key={id} className="car-tag">
                <img src={image} alt="car image" className="car-image" />
                <h3>{name}</h3>
                <h3>${price} Per Day</h3>
                <div className="car-detail">
                  <h4>Mark: {mark}</h4>
                  <h4>Model: {model}</h4>
                  <h4>Year: {year}</h4>
                  <h4>Fuel: {fuel}</h4>
                </div>
                <div className="center">
                  <button
                    className="colored-button"
                    onClick={() => {
                      handleSubmit(car);
                    }}
                  >
                    Book Ride
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default bookCar;
