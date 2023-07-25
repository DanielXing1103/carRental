import React from "react";
import Home from "./pages/home";
import Book from "./pages/book.jsx";
import Rentals from "./pages/rentals";
import ConfirmationPage from "./pages/ConfirmationPage";
import About from "./pages/about";
import TestimonialsPage from "./pages/testimonials";
import Contact from "./pages/contact";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./config/privateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/book"
          element={
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/Rentals" element={<Rentals />}></Route>
        <Route path="/confirmation" element={<ConfirmationPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/testimonials" element={<TestimonialsPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
