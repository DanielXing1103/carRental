import Data from "./fleetData";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const FleetSlide = () => {
  const [index, setIndex] = useState(0);
  const [fleets, setFleets] = useState(Data);
  useEffect(()=>{
    if(index<0){
      setIndex(fleets.length-1);
    }
    if(index == fleets.length){
      setIndex(0);
    }
  })

  return (
    <div className="white-container">
      <div className="center">
        <p className="title">View our fleet.</p>
      </div>
      <div className="slider-content">
        <div className="slides">
          {fleets.map((fleet, fleetIndex) => {
            console.log(fleetIndex);
            console.log(index);
            const { name, image, description, id } = fleet;
            let position = "activeSlide";
            if (fleetIndex < index) {
              position = "prevSlide";
            } else if (fleetIndex > index) {
              position = "nextSlide";
            }
            console.log(position);
            return (
              <article className={position} key={id}>
                <img src={image} alt="fleet" className="fleet-image" />
                <p className="fleet-title">{name}</p>
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
        <button className="colored-button">All Cars</button>
      </div>
    </div>
  );
};

export default FleetSlide;
