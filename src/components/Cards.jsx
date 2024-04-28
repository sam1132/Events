import React from "react";
import cardImage from "../assets/168.webp";

const Cards = ({ date,title,description,teams,status}) => {
  return (
    <div className=" max-w-[20rem] md:max-w-7xl mx-auto my-10">
      <div className="max-w-[23rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={cardImage}
            alt="code kshetra hackathon"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
           
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <div className="mb-4">
            <h2 className="text-bg-slate-900 text-xl font-bold ">
              Teams Participated {teams}
            </h2>
            <p className="text-slate-900 font-bold text-lg">{date}</p>
          </div>
          <button className="inline-flex items-center px-3 py-2 text-sm duration-700 text-center font-bold hover:text-slate-900 hover:bg-[#80ed99] rounded-lg bg-slate-900 text-[#80ed99] ">
            {status}
            {/* <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
