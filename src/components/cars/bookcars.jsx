import { useEffect, useState } from "react";
import { CAR_DATA } from "./car-data";
import Contact from "../contact/bookContact";
import { useNavigate } from "react-router-dom";
import "../date/date.css";

const bookCar = (props) => {
  const navigate = useNavigate();//for go to booking page
  useEffect(() => {
    //update book page to car page if display is 2.
    if (props.display == 2) {
      props.setDisplay(2);
    }
  }, [props.display]);

  const handleSubmit = (car) => {
    //save the data
    localStorage.setItem("car", JSON.stringify(car));
    //display contact page
    props.setDisplay(3);
  };

  return (
    <div className="container">
      <Contact display={props.display} setDisplay={props.setDisplay} />
      <div className={props.display == 2 ? "car-content" : "hide"}>
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
                      props.rentalPage ? (
                       navigate("/book") 
                      ) : (
                        handleSubmit(car)
                      );
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
