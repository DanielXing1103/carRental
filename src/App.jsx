import React from "react";
import Home from "./pages/home";
import Book from "./pages/book.jsx";
import Rentals from "./pages/rentals";
import ConfirmationPage from "./pages/ConfirmationPage";
import About from "./pages/about";
import TestimonialsPage from "./pages/testimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/Rentals" element={<Rentals />}></Route>
        <Route path="/confirmation" element={<ConfirmationPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/testimonials" element={<TestimonialsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
