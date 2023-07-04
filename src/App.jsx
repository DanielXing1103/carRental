import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
