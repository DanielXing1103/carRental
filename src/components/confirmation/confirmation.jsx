import "../date/date.css";

const Confirmation = (props) => {
  //check for local storage
  const localDates = localStorage.getItem("dates");
  const localCar = localStorage.getItem("car");
  const localContacts = localStorage.getItem("contacts");
  //if some not valid do not run code
  if (!localDates || !localCar || !localContacts) {
    return;
  }
  //retrieve data from local storage
  const { dropoffDate, dropoffTime, pickupDate, pickupTime } = JSON.parse(
    localStorage.getItem("dates")
  );
  const { name, price, model, mark, year, fuel } = JSON.parse(
    localStorage.getItem("car")
  );
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    city,
    state,
    zipCode,
  } = JSON.parse(localStorage.getItem("contacts"));

  return (
    <div className="container">
      <div className={props.display == 4 ? "confirmation-content" : "hide"}>
        <div className="text">Confirmation</div>
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
          <button className="colored-button" onClick={()=>{props.setDisplay(5);
          localStorage.setItem("end",true)}}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
