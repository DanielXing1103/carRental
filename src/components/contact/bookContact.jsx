import "../date/date.css";
import Confirmation from "../confirmation/confirmation";
import { useState, useEffect } from "react";

const BookContact = (props) => {
  const [input, setInput] = useState(true); // for error message if not all input are filled

  useEffect(() => {
    //update book page to car page if display is 2.
    if (props.display == 3) {
      props.setDisplay(3);
    }
  }, [props.display]);

  const handleSubmit = (e) => {     
    e.preventDefault();
    //get data
    const inputNames = [
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "address",
      "city",
      "state",
      "zipCode",
    ];
    const contacts = {};

    let count = 0;
    for (let i = 0; i < inputNames.length; i++) {
      const inputElement = document.getElementById(inputNames[i]);
      inputElement.value ? count++ : count;
      contacts[inputNames[i]] = inputElement.value;
    }

    //if all input are filled
    if (count == inputNames.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      //hidden contact tab and error message
      props.setDisplay(4);
      setInput(true);
    } else {
      //display error
      setInput(false);
    }
  };
  return (
    <div className="container">
      <Confirmation display={props.display} setDisplay={props.setDisplay} />
      <div className={props.display == 3 ? "contact-content" : "hide"}>
        <div className="text">Contact</div>
        <h1 className={input ? "alert off" : "alert"}>All fields required</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="center">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name=""
                  id="firstName"
                />
              </span>
              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name=""
                  id="lastName"
                />
              </span>
            </div>
            <div className="info-form__1col">
              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  name=""
                  id="phoneNumber"
                />
              </span>
            </div>
            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name=""
                  id="email"
                />
              </span>
            </div>
            <div className="info-form__2col">
              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  name=""
                  id="address"
                />
              </span>
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  name=""
                  id="city"
                />
              </span>
              <span>
                <label>
                  State <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  name=""
                  id="state"
                />
              </span>
              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  name=""
                  id="zipCode"
                />
              </span>
            </div>

            <button type="submit" className="colored-button">
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookContact;
