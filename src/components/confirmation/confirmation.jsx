import "../date/date.css";
import { useNavigate } from "react-router-dom";
import check from "../../image/png/Eo_circle_light-green_checkmark.svg.png";
import { useEffect, useState } from "react";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import Loading from "../loading/loading";
import car from "../../image/icon/car-driving.gif";

const Submitted = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [isLoading, setIsLoading] = useState(true);
  const [requestList, setRequestList] = useState(); // State to hold the list of user's booking requests
  const requestQuery = query(
    collection(db, "booking"),
    where("email", "==", user.email)
  );

  useEffect(() => {
    // Function to fetch the list of booking requests for the current user
    const getRequestList = async () => {
      try {
        // Fetch data from Firestore using the 'requestQuery' to filter bookings based on the current user's email
        const rawData = await getDocs(requestQuery);

        // Transform the raw data into a more usable format
        const data = rawData.docs.map((doc) => {
          return { bookData: doc.data(), bookID: doc.id };
        });

        // Extract relevant details from each booking entry and create a new array of formatted data
        const filteredData = data.map((doc) => {
          const bookDate = doc.bookData.bookDate;
          const requestId = doc.bookData.requestId;
          const bookCar = doc.bookData.car;
          const pdDate = doc.bookData.dates;
          const key = doc.bookID;
          return {
            key: key,
            bookDate: bookDate,
            requestId: requestId,
            bookCar: bookCar,
            pdDate: pdDate,
          };
        });

        // Update the 'requestList' state with the filtered and formatted data
        setRequestList(filteredData);

        // Set the 'isLoading' state to 'false' to indicate that the data fetching is complete
        setIsLoading(false);
      } catch (error) {
        // Handle any errors that may occur during data fetching
        console.log(error);

        // Set the 'isLoading' state to 'false' even if an error occurs to prevent an infinite loading state
        setIsLoading(false);
      }
    };

    // Call the 'getRequestList' function to fetch the data when the component mounts
    getRequestList();
  }, []);

  // If data is still loading, display a loading indicator
  if (isLoading) {
    return <Loading />;
  }

  // Render the actual content once data is loaded and 'isLoading' is false
  // (In this case, you can render the booking requests using the 'requestList' state)
  if (requestList.length === 0) {
    return (
      <div className="container">
        <div className="submitted-content">
          <div className="text">Confirmation</div>
          <div className="center">
            <img src={car} alt="Animated car driving" className="car-driving" />
            <p>
              <span className="checkmark">&#10004;</span> You haven't made any
              requests yet!
            </p>
            <p>Please make a request first to see the details.</p>
          </div>
          <div className="center">
            <button
              className="colored-button"
              onClick={() => {
                navigate("/book");
              }}
            >
              Book a Car
            </button>
          </div>
        </div>
        <div className="pad"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="submitted-content">
        <div className="text">Confirmation</div>
        <div className="center">
          <img src={check} alt="check mark" className="check-mark" />
          <div>
            <p>
              <span className="checkmark">&#10004;</span> Request Submitted
              Successfully!
            </p>
            <p>
              Thank you for submitting your request. We have received your
              information and will process it accordingly.
            </p>
            <p>Please find below the details of your submission:</p>
            {requestList.map((request) => {
              return (
                <ul key={request.key}>
                  <br />
                  <li>
                    <strong>Request ID:</strong>
                    {request.requestId && request.requestId}
                  </li>
                  <li>
                    <strong>Book date:</strong> {request.bookDate}
                    <strong>Model:</strong> {request.bookCar.model}
                  </li>
                  <li>
                    <strong>Pick up date:</strong> {request.pdDate.pickupDate}
                    <strong>Drop off date:</strong>
                    {request.pdDate.dropoffDate}
                  </li>
                  <br />
                </ul>
              );
            })}

            <p>
              We appreciate your patience while we review your request. If any
              additional information is required, our team will reach out to you
              using the contact details provided.
            </p>
            <p>
              For any urgent inquiries, please contact our support team at (123)
              - 456 - 7890.
            </p>
            <p>
              Once again, thank you for choosing our services. We look forward
              to assisting you further.
            </p>
          </div>{" "}
        </div>
        <div className="center">
          <button
            className="colored-button"
            onClick={() => {
              navigate("/book");
            }}
          >
            Book Another Car
          </button>
        </div>
      </div>
      <div className="pad"></div>
    </div>
  );
};

export default Submitted;
