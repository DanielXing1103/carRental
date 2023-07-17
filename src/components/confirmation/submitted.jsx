import "../date/date.css";
import { useNavigate } from "react-router-dom";
import check from "../../image/png/Eo_circle_light-green_checkmark.svg.png";
import RequestIdGenerator from "../requestId/requestID";
import { useEffect } from "react";

const Submitted = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const handleSubmit = () => {
    //remove the items for now. modify if added backend
    localStorage.removeItem("dates");
    localStorage.removeItem("car");
    localStorage.removeItem("contacts");

    localStorage.removeItem("end");
    navigate("/book");
  };

  return (
    <div className="container">
      <div className="submitted-content">
        <div className="text">Confirmation</div>
        <div className="center">
          <img src={check} alt="check mark" className="check-mark" />
          <div>
            <p>
              <span class="checkmark">&#10004;</span> Request Submitted
              Successfully!
            </p>
            <p>
              Thank you for submitting your request. We have received your
              information and will process it accordingly.
            </p>
            <p>Please find below the details of your submission:</p>
            <ul>
              <li>
                <strong>Request ID:</strong> {<RequestIdGenerator />}
              </li>
              <li>
                <strong>Date:</strong> {formattedDate}
              </li>
            </ul>
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
              handleSubmit();
            }}
          >
            Book Another Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
