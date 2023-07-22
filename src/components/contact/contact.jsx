import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import "../date/date.css"; //contact info css is here
import { Navigate } from "react-router-dom";
const Contact = () => {
  const [input, setInput] = useState(true); //for error message when not all input are filled
  const messageCollectionRef = collection(db, "message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //collects data
    const inputNames = ["firstName", "lastName", "email", "message"];
    const message = {};
    let count = 0;
    for (let i = 0; i < inputNames.length; i++) {
      const inputElement = document.getElementById(inputNames[i]);
      inputElement.value ? count++ : count;
      message[inputNames[i]] = inputElement.value;
    }
    //if all fields is filled
    if (count == inputNames.length) {
      try {
        await addDoc(messageCollectionRef, {
          message:message,
        });
      } catch (error) {}
      //hidden date tab and error message and display car page
      setInput(true);
      alert("Your message has been send");
    } else {
      //display error
      setInput(false);
    }
  };
  return (
    <div className="contactPage-container">
      <div className="contact-detail">
        <p className="contact-title">Get in touch with us</p>
        <div className="phone">
          <span className="icon">
            <AiFillPhone />
          </span>
          <span className="info">(123) 456-7890</span>
        </div>
        <div className="email">
          <span className="icon">
            <AiOutlineMail />
          </span>
          <span className="info">carrental@gmail.com</span>
        </div>
      </div>
      <div className="contact-info">
        <h1 className={input ? "alert off" : "alert"}>All fields required</h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="center">
            <div class="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
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
                  placeholder="Enter last name"
                  name=""
                  id="lastName"
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
                  placeholder="Enter email"
                  name=""
                  id="email"
                />
              </span>
            </div>
            <div className="info-form__1col">
              <span>
                <label>
                  Message <b>*</b>
                </label>
                <input
                  className="high"
                  type="message"
                  placeholder="Enter message"
                  name=""
                  id="message"
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

export default Contact;
