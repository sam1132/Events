import React from "react";
const Carousel_main = () => {
  return (
    <>
      <div className="max-w-md md:max-w-7xl  md:mx-auto mx-5">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full  rounded-md"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full rounded-md"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full rounded-md"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel_main;
