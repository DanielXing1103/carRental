import { useState } from "react";
import "../date/newdate.css";
import { CAR_DATA } from "./car-data";
const bookCar = () => {

    const handleSubmit = (car) => {
        console.log(car);
    }
  return (
    <div className="container">
      <div className="content">
        <div className="text">
          <div className="text">Book a Car</div>
          <div className="car-display">
            {CAR_DATA.map((car) => {
              const { id, name, price, model, mark, doors } = car;
              return (
                <div key={id} >
                  <p>{name}</p>
                  <button className="colored-button" onClick={()=>{handleSubmit(car)}}>Book</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookCar;
