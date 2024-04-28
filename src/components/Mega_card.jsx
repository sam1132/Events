import React from "react";
import CountdownTimer from "./CountdownTimer";

const Mega_card = ({ date, time, place, title }) => {
  return (
    <>
      <div className="max-w-md mx-5 px-2 md:max-w-7xl md:mx-auto text-white rounded-lg mt-7 mb-20">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="bg-orange-600 rounded-full w-60 h-48 -top-4 -left-8 filter blur-2xl opacity-50 absolute"></div>
          <div className="bg-cyan-400 rounded-full w-60 h-48 -top-4 -right-8 filter blur-2xl opacity-50 absolute"></div>
          <h3 className="text-md mb-2 text-cyan-400">
            {date}, {place}
          </h3>
          <h1 className="md:text-4xl font-semibold text-orange-600">{title}</h1>
          <div className="mt-5">
            <CountdownTimer eventDate={date + " " + time} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mega_card;
