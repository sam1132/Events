import React, { useState, useEffect, useRef } from "react";
import logog from "../assets/gr.png";
import { gsap } from "gsap";

const Navbar = () => {
  const listItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Events</a>
      </li>
      <li>
        <a>Achievements</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
    </>
  );
  const logoRef = useRef(null);
  useEffect(() => {
    const xValue = calculateXValue()
    if (logoRef.current) {
      gsap.to(logoRef.current,
         { x: xValue,
           yoyo: true, 
           ease: "power1.easeInOut",
           duration:2,
          onComplete: ()=>{
            gsap.to(logoRef.current,{
              x:0,
              ease:"Power1.easeInOut",
              duration:2
            })
          } });
    }
  }, []);
  const calculateXValue = () => {
   
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return 150;
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      return 200;
    } else {
      return 280;
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full shadow-lg mx-auto mb-5 md:mb-10 md:px-16 relative ">
        <div className="navbar " >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {isMenuOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-[#80ed99] text-slate-900 font-bold cursor-pointer text-lg"
                >
                  {listItems}
                </ul>
              )}
            </div>
            <div className="logo" ref={logoRef}>
              <img className="md:w-20 md:h-20 h-16 w-16 " src={logog}></img>
            </div>
            <a className=" ml-2 md:ml-0 text-md md:text-2xl md:font-bold text-[#80ed99]">
              Geek Room <span className="text-cyan-400">JIMS</span>
            </a>
          </div>
          <div className="navbar-end">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-[#80ed99] font-bold cursor-pointer text-lg">
                {listItems}
              </ul>
            </div>
            <div>
              <button className="text-slate-900 font-bold text-lg border bg-[#80ed99]  py-2 px-3  rounded-md  cursor-pointer hover:bg-slate-900 hover:text-[#80ed99] duration-700">
                LogIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
