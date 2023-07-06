import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "./newdate.css";

function Booking() {
  const [input, setInput] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    const pickupDate = document.getElementById("pickup-date").value;
    const pickupTime = document.getElementById("pickup-time").value;
    const dropoffDate = document.getElementById("dropoff-date").value;  
    const dropoffTime = document.getElementById("dropoff-time").value;

    console.log("Pickup Date:", pickupDate);
    console.log("Pickup Time:", pickupTime);
    console.log("Drop-off Date:", dropoffDate);
    console.log("Drop-off Time:", dropoffTime);

    pickupDate && pickupTime && dropoffDate && dropoffTime
      ? (setInput(true))
      : setInput(false);

    

  };

  return (
    <div className="date-container">
      <div className="date-content">
        <div className="text">Book a Car</div>
        <h1 className={input ? "alert off" : "alert"}> All fields required</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-data">
            <div className="txt">Select pickup date and time</div>
            <input type="date" name="" id="pickup-date" />
          </div>

          <div className="input-data">
            <input type="time" name="" id="pickup-time" />
          </div>

          <div className="input-data">
            <div className="txt">Select dropoff date and time</div>
            <input type="date" name="" id="dropoff-date" />
          </div>
          <div className="input-data">
            <input type="time" name="" id="dropoff-time" />
          </div>

          <button type="submit" className="colored-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
