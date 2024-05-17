import React from "react";
<<<<<<< HEAD
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
=======
import Navbar from "./components/Navbar";
import Carousel_main from "./components/Carousel_main";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <div className="bg-slate-900">
        <Navbar />
        <Carousel_main/>
        <MainContent />
       
>>>>>>> 51612bde9eaeaabf992a8069cd7103efe966f0f7
      </div>
    </>
  );
};

export default App;
