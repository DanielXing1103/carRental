import { useState, useEffect } from "react";
import Bookcars from "../cars/bookcars.jsx";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "./newdate.css";

function Booking() {
  const [input, setInput] = useState(true);
  const [display, setDisplay] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    //get data
    const inputNames = [
      "pickup-date",
      "pickup-time",
      "dropoff-date",
      "dropoff-time",
    ];
    const dates = {};
    let count = 0;
    for (let i = 0; i < inputNames.length; i++) {
      const inputElement = document.getElementById(inputNames[i]);
      inputElement.value ? count++ : count;
      dates[inputNames[i]] = inputElement.value;
    }

    if ((count == inputNames.length)) {
      localStorage.setItem("dates", JSON.stringify(dates));
      //hidden date tab and error message
      setDisplay((2));

    } else {
      //display error
      setInput(false);
    }
  };

  return (
    <div className="container">
      <Bookcars display={display} />
      <div className={display==1 ? "date-content" : "hide"}>
        {/* <div className={"hide"}> */}
        <div className="text">Choose Date</div>
        <h1 className={input ? "alert off" : "alert"}>All fields required</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-element">
            <div className="input-data">
              <div className="txt">
                Select pickup date and time <b>*</b>
              </div>
              <input type="date" name="" id="pickup-date" />
            </div>
            <div className="input-data">
              <input type="time" name="" id="pickup-time" />
            </div>
          </div>
          <div className="form-element">
            <div className="input-data">
              <div className="txt">
                Select dropoff date and time <b>*</b>
              </div>
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
      </div>
    </div>
  );
}

export default Booking;
