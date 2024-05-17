import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx"
const App = () => {
  return (
    <>
      <div>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      </div>
    </>
  );
};

export default App;
