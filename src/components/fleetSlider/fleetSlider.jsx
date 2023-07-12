import Data from "./fleetData";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const FleetSlide = () => {
  const [index, setIndex] = useState(0);
  const [fleets, setFleets] = useState(Data);
  let half = fleets.length / 2 - 1;
  useEffect(() => {
    if (index < 0) {
      setIndex(fleets.length - 1);
    }
    if (index == fleets.length) {
      setIndex(0);
    }
  });

  return (
    <div className="white-container">
      <div className="center">
        <p className="title">View our fleet.</p>
      </div>
      <div className="slider-content">
        <div className="slides">
          {fleets.map((fleet, fleetIndex) => {
            const { name, image, description, id } = fleet;
            let position;
            let opposite = 0;
            if (index < half) {
              opposite = index + half;
              if (fleetIndex < opposite && fleetIndex > index) {
                position = "nextSlide";
              } else {
                position = "prevSlide";
              }
            } else {
              opposite = index - half;
              if (fleetIndex > opposite && fleetIndex < index) {
                position = "prevSlide";
              } else {
                position = "nextSlide";
              }
            }
            if (fleetIndex == index) {
              position = "activeSlide";
            }
            console.log("start");
            console.log(index);
            console.log(fleetIndex);
            console.log(position);
            return (
              <article className={position} key={id}>
                <img src={image} alt="fleet" className="fleet-image" />
                <h1 className="fleet-title">{name}</h1>
                <p className="fleet-description">{description}</p>
              </article>
            );
          })}
          <div
            className="prev"
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            <FiChevronLeft />
          </div>
          <div
            className="next"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            <FiChevronRight />
          </div>
        </div>
        <a className="colored-button">View All Cars</a>
      </div>
    </div>
  );
};

export default FleetSlide;
