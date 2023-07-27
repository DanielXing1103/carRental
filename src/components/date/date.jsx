import { useState, useEffect } from "react";
import Bookcars from "../cars/bookcars.jsx";
import { useNavigate } from "react-router-dom";
import { collection, where, query, getDocs } from "firebase/firestore";
import Loading from "../loading/loading.jsx";
import { db, auth } from "../../config/firebase";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "./date.css";

function Booking() {
  const navigate = useNavigate();

  const [input, setInput] = useState(true); //for error message when not all input are filled
  const [display, setDisplay] = useState(1); //controls page display
  const [loading, setLoading] = useState(true);
  // get all possible data
  const localDates = localStorage.getItem("dates");
  const localCar = localStorage.getItem("car");
  const localContacts = localStorage.getItem("contacts");

  const user = auth.currentUser;
  const requestQuery = query(
    collection(db, "booking"),
    where("email", "==", user.email)
  );
  useEffect(() => {
    const getRequestList = async () => {
      try {
        const rawData = await getDocs(requestQuery);
        const data = rawData.docs.map((doc) => {
          return { bookData: doc.data(), bookID: doc.id };
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getRequestList();
  }, []);
  useEffect(() => {
    if (localDates && localCar && localContacts) {
      setDisplay(4); //jump to confirmation if all data is filled and when it is not end page
    }
  });
  if (loading) {
    return <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //collects data
    const inputNames = [
      "pickupDate",
      "pickupTime",
      "dropoffDate",
      "dropoffTime",
    ];
    const dates = {};
    let count = 0;
    for (let i = 0; i < inputNames.length; i++) {
      const inputElement = document.getElementById(inputNames[i]);
      inputElement.value ? count++ : count;
      dates[inputNames[i]] = inputElement.value;
    }
    //if all fields is filled
    if (count == inputNames.length) {
      localStorage.setItem("dates", JSON.stringify(dates)); //save data
      //hidden date tab and error message and display car page
      setDisplay(2);
      setInput(true);
    } else {
      //display error
      setInput(false);
    }
  };

  return (
    <div>
      <div className="pad"></div>
      <div className="container">
        {/* pass display and setDisplay along the book page */}
        <Bookcars display={display} setDisplay={setDisplay} />
        <div className={display == 1 ? "date-content" : "hide"}>
          <div className="text">Choose Date</div>
          <div className="center">
            <h1 className={input ? "alert off" : "alert"}>
              All fields required
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-element">
              <div className="input-data">
                <div className="txt">
                  Select pickup date and time <b>*</b>
                </div>
                <input type="date" name="" id="pickupDate" />
              </div>
              <div className="input-data">
                <input type="time" name="" id="pickupTime" />
              </div>
            </div>
            <div className="form-element">
              <div className="input-data">
                <div className="txt">
                  Select dropoff date and time <b>*</b>
                </div>
                <input type="date" name="" id="dropoffDate" />
              </div>
              <div className="input-data">
                <input type="time" name="" id="dropoffTime" />
              </div>
            </div>
            <button type="submit" className="colored-button">
              Select Dates
            </button>
          </form>
        </div>
      </div>
      <div className="pad"></div>
    </div>
  );
}

export default Booking;
