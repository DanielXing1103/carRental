import "../date/date.css";
import { useNavigate } from "react-router-dom";
import check from "../../image/png/Eo_circle_light-green_checkmark.svg.png";
import { useEffect, useState } from "react";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import Loading from "../loading/loading";

const Submitted = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [isLoading, setIsLoading] = useState(true);
  const [requestList, setRequestList] = useState();
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

        const filteredData = data.map((doc) => {
          const bookDate = doc.bookData.bookDate;
          const requestId = doc.bookData.requestId;
          const key = doc.bookID;
          return {
            key: key,
            bookDate: bookDate,
            requestId: requestId,
          };
        });
        setRequestList(filteredData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getRequestList();
  }, []);

  if (isLoading) {
    return <Loading />;
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
                  <li>
                    <strong>Request ID:</strong>
                    {request.requestId && <p>{request.requestId}</p>}
                  </li>
                  <li>
                    <strong>Date:</strong> {request.bookDate}
                  </li>
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
