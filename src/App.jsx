import React from "react";
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
       
      </div>
    </>
  );
};

export default App;
