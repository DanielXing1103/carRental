import accordionData from "./accordionData";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";

const Accordion = () => {
  return (
    <div className="accordion-container">
      <div className="accordion-title">
        <p className="review-subtitle">Q&A</p>
        <p className="review-title">Questions And Answers</p>
        <p className="review-description">
          Get answers to common car rental questions, ensuring transparency and
          helping you make informed decisions with ease.
        </p>
      </div>
      <div className="q-a-container">
        <h3>Frequently Asked Questions About carRental</h3>
        {accordionData.map((data) => {
          const { question, answer, key } = data;
          const [display, setDisplay] = useState(false);
          return (
            <div className="q-a-unit" key={key}>
              <div className={display ? "q-unit-blue" : "q-unit"}>
                <h3 className="q-text">{question}</h3>
                <button
                  className="info-btn"
                  onClick={() => {
                    setDisplay(!display);
                  }}
                >
                  {display ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </div>
              <div className={display ? "a-unit" : "a-unit-hidden"}>
                <p className="a-text">{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
