import "../date/date.css";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../config/firebase";

const Confirmation = (props) => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const bookCollectionRef = collection(db, "booking");
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  //check for local storage
  const localDates = JSON.parse(localStorage.getItem("dates"));
  const localCar = JSON.parse(localStorage.getItem("car"));
  const localContacts = JSON.parse(localStorage.getItem("contacts"));
  //if some not valid do not run code
  if (!localDates || !localCar || !localContacts) {
    return;
  }
  //retrieve data from local storage
  const { dropoffDate, dropoffTime, pickupDate, pickupTime } = localDates;
  const { name, price, model, mark, year, fuel } = localCar;
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    city,
    state,
    zipCode,
  } = localContacts;
  const requestId = localStorage.getItem("requestId");

  const handleSubmit = async () => {
    try {
      // Attempt to add a new document to the 'bookCollectionRef' collection in Firebase Firestore
      await addDoc(bookCollectionRef, {
        // Data to be added to the document
        dates: localDates, // An array of selected dates 
        car: localCar, // Details of the selected car for booking
        contacts: localContacts, // Contact information of the user making the booking
        requestId: requestId, // A unique identifier for the booking request
        bookDate: formattedDate, // The formatted date of the booking
        email: user.email, // The email of the currently logged-in user 
      });

      // If the document addition is successful, remove the temporary data from local storage
      localStorage.removeItem("dates");
      localStorage.removeItem("car");
      localStorage.removeItem("contacts");
      localStorage.removeItem("requestId");

      // Navigate to the "/confirmation" route, page that shows a booking confirmation
      navigate("/confirmation");
    } catch (error) {
    }
  };

  return (
    <div className="container">
      <div className={props.display == 4 ? "confirmation-content" : "hide"}>
        <div className="text">Review information</div>

        <div className="center">
          <div>
            <h3 className="confirm-header">Dates</h3>
            <a
              onClick={() => {
                //delete current data and jump to that page
                localStorage.removeItem("dates");
                props.setDisplay(1);
              }}
            >
              Edit
            </a>
          </div>
          <div className="confirm-detail">
            <span className="name">Pickup Date:</span>
            <span className="content">{pickupDate}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Pickup Time:</span>
            <span className="content">{pickupTime}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Dropoff Date:</span>
            <span className="content">{dropoffDate}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Dropoff Time:</span>
            <span className="content">{dropoffTime}</span>
          </div>
        </div>
        <div className="center">
          <div>
            <h3 className="confirm-header">Car</h3>
            <a
              onClick={() => {
                //delete current data and jump to that page
                localStorage.removeItem("car");
                props.setDisplay(2);
              }}
            >
              Edit
            </a>
          </div>
          <div className="confirm-detail">
            <span className="name">Name:</span>
            <span className="content">{name}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Price:</span>
            <span className="content">${price} / Day</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Model:</span>
            <span className="content">{model}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Mark:</span>
            <span className="content">{mark}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Year:</span>
            <span className="content">{year}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Fuel:</span>
            <span className="content">{fuel}</span>
          </div>
        </div>
        <div className="center">
          <div>
            <h3 className="confirm-header">Contacts</h3>
            <a
              onClick={() => {
                //delete current data and jump to that page
                localStorage.removeItem("contacts");
                props.setDisplay(3);
              }}
            >
              Edit
            </a>
          </div>
          <div className="confirm-detail">
            <span className="name">First Name:</span>
            <span className="content">{firstName}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Last Name:</span>
            <span className="content">{lastName}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Phone Number:</span>
            <span className="content">{phoneNumber}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Email:</span>
            <span className="content">{email}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Address:</span>
            <span className="content">{address}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">City:</span>
            <span className="content">{city}</span>
          </div>{" "}
          <div className="confirm-detail">
            <span className="name">State:</span>
            <span className="content">{state}</span>
          </div>
          <div className="confirm-detail">
            <span className="name">Zip Code:</span>
            <span className="content">{zipCode}</span>
          </div>
        </div>
        <div className="center">
          <button
            className="colored-button"
            onClick={() => {
              handleSubmit();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
