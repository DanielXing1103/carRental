import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "./date.css";

function Booking() {
  const [input, setInput] = useState(true);
  const [pickupDate, setPickupDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [dropoffTime, setDropoffTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pickup Date:", pickupDate);
    console.log("Pickup Time:", pickupTime);
    console.log("Drop-off Date:", dropoffDate);
    console.log("Drop-off Time:", dropoffTime);
    !pickupDate && !pickupTime && !dropoffDate && !dropoffTime
      ? setInput(false)
      : setInput(true);
  };

  return (
    <div className="date-container">
      <div className="DateSelectionForm">
        <h2 className="FormTitle">Book a Car</h2>
        <h1 className={input ? "alert off" : "alert"}> All fields required</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="pickup-date" className="Label">
            Pickup Date:
          </label>
          <DatePicker
            id="pickup-date"
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select pickup date"
            className="DatePicker"
          />
          <br />
          <label htmlFor="pickup-time" className="Label">
            Pickup Time:
          </label>
          <TimePicker
            id="pickup-time"
            onChange={setPickupTime}
            value={pickupTime}
            className="TimePicker"
          />
          <br />
          <label htmlFor="dropoff-date" className="Label">
            Drop-off Date:
          </label>
          <DatePicker
            id="dropoff-date"
            selected={dropoffDate}
            onChange={(date) => setDropoffDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select drop-off date"
            className="DatePicker"
          />
          <br />
          <label htmlFor="dropoff-time" className="Label">
            Drop-off Time:
          </label>
          <TimePicker
            id="dropoff-time"
            onChange={setDropoffTime}
            value={dropoffTime}
            className="TimePicker"
          />
          <br />
          <button type="submit" className="SubmitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
