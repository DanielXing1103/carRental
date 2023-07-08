import "../date/newdate.css";
import { useState, useEffect } from "react";

const Contact = (props) => {
  const [input, setInput] = useState(true);
  const [display, setDisplay] = useState(props.display);
  useEffect(() => {
    if (props.display == 3) {
      setDisplay(3);
    }
  }, [props.display]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //get data
    const inputNames = [
      "first name",
      "last name",
      "phone number",
      "age",
      "address",
      "city",
      "state",
      "zip-code",
    ];
    const contacts = {};
    let count = 0;
    for (let i = 0; i < inputNames.length; i++) {
      const inputElement = document.getElementById(inputNames[i]);
      inputElement.value ? count++ : count;
      contacts[inputNames[i]] = inputElement.value;
    }

    if (count == inputNames.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      //hidden contact tab and error message
      setDisplay(4);

    } else {
      //display error
      setInput(false);
    }
  };
  return (
    <div className={display == 3 ? "contact-content" : "hide"}>
      {/* <div className="hide"> */}
      <div className="text">Contact</div>
      <h1 className={input ? "alert off" : "alert"}>All fields required</h1>
      <form onSubmit={handleSubmit} className="form">
        <div class="info-form__2col">
          <span>
            <label>
              First Name <b>*</b>
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              name=""
              id="first name"
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
              id="last name"
            />
          </span>
          <span>
            <label>
              Phone Number <b>*</b>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              name=""
              id="phone number"
            />
          </span>
          <span>
            <label>
              Email <b>*</b>
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              name=""
              id="age"
            />
          </span>
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
              id="zip-code"
            />
          </span>
        </div>
        <button type="submit" className="colored-button">
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
