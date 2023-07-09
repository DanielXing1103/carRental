import { useState } from "react";
import Navbar from "../components/nav_bar/navbar";

import Date from "../components/date/date";
import "./style.css";

const book = () => {
  return (
    <div className="page">
      <Navbar />
      <Date />
    </div>
  );
};

export default book;
