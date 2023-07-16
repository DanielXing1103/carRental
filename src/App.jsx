import React from "react";
import Home from "./pages/home";
import Book from "./pages/book.jsx";
import Rentals from "./pages/rentals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/Rentals" element={<Rentals />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
