import { useState, useEffect } from "react";
import Bookcars from "../cars/bookcars.jsx";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "./newdate.css";

function Booking() {
  const [input, setInput] = useState(true);
  const [display, setDisplay] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const pickupDate = document.getElementById("pickup-date").value;
    const pickupTime = document.getElementById("pickup-time").value;
    const dropoffDate = document.getElementById("dropoff-date").value;
    const dropoffTime = document.getElementById("dropoff-time").value;
    if (pickupDate && pickupTime && dropoffDate && dropoffTime) {
      const dates = {
        pickupDate,
        pickupTime,
        dropoffDate,
        dropoffTime,
      };
      localStorage.setItem("dates", JSON.stringify(dates));

      setInput(true);
      setDisplay(false)
    } else {
      setInput(false);
    }
  };

  return (
    <div className="container">
      <Bookcars dateDisplay={display}/>
      <div className={display?"date-content":"hide"}>
        <div className="text">Book a Car</div>
        <h1 className={input ? "alert off" : "alert"}>All fields required</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-element">
            <div className="input-data">
              <div className="txt">Select pickup date and time</div>
              <input type="date" name="" id="pickup-date" />
            </div>
            <div className="input-data">
              <input type="time" name="" id="pickup-time" />
            </div>
          </div>
          <div className="form-element">
            <div className="input-data">
              <div className="txt">Select dropoff date and time</div>
              <input type="date" name="" id="dropoff-date" />
            </div>
            <div className="input-data">
              <input type="time" name="" id="dropoff-time" />
            </div>
          </div>
          <button type="submit" className="colored-button">
            Submit
          </button>
        </form>
      </div>{" "}
    </div>
  );
}

export default Booking;
