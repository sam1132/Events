import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Cards from "./Cards";
import Mega_card from "./Mega_card";

const MainContent = () => {
  const [sortAscending, setSortAscending] = useState(false);
  const [showPreviousEvents, setShowPreviousEvents] = useState(false);
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(true); // Set to true by default
  const [cards, setCards] = useState([
    {
      id: 1,
      date: "5-2-2024",
      category: "previous",
      title: "A Thrilling 36 Hour Hackathon",
      description: `Organized by Geek Room a vibrant community dedicated to enhancing
      coding skills, started as an open community for solving
      tech-related queries and participating in college competitions.`,
      teams: 500,
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-05-18",
      category: "upcoming",
      title: "Code Cubicle",
      description: `Organized exclusively by Geek Room at Microsoft Office Gurugram, this hackathon promises an electrifying experience`,
      status: "Register",
    },
    {
      id: 3,
      title:"Code Cubicle",
      date: "18 June 2024",
      place: "Gurugram",
      time: "9:0:0",
      status: "upcoming",
      category: "Mega",
    },
  ]);

  const toggleSortingOrder = () => {
    setSortAscending(!sortAscending);
  };

  const togglePreviousEvents = () => {
    setShowPreviousEvents(true);
    setShowUpcomingEvents(false);
  };

  const toggleUpcomingEvents = () => {
    setShowUpcomingEvents(true);
    setShowPreviousEvents(false);
  };

  const sortedCards = [...cards].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortAscending ? dateA - dateB : dateB - dateA;
  });

  return (
    <>
        <div>
          {cards
            .filter((card) => card.category === "Mega")
            .map((card) => (
              <Mega_card
                key={card.id}
                date={card.date}
                time={card.time}
                title={card.title}
                place={card.place}
              />
            ))}
        </div>
      <div className="text-white font-bold text-md sm:text-lg md:text-2xl flex items-end justify-evenly mt-10 max-w-7xl mx-auto">
    
        <button onClick={togglePreviousEvents}>Previous Events</button>
        <button onClick={toggleUpcomingEvents}>Upcoming Events</button>
        <button
          className="flex justify-center gap-x-2 md:gap-x-5 items-center"
          onClick={toggleSortingOrder}
        >
          Sort
          <span className="text-[#80ed99]">
            {sortAscending ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </span>
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:max-w-7xl md:mx-auto mx-4">
        {showPreviousEvents &&
          sortedCards
            .filter((card) => card.category === "previous")
            .map((card) => (
              <Cards
                key={card.id}
                date={card.date}
                title={card.title}
                description={card.description}
                teams={card.teams}
                status={card.status}
              />
            ))}
        {showUpcomingEvents &&
          sortedCards
            .filter((card) => card.category === "upcoming")
            .map((card) => (
              <Cards
                key={card.id}
                date={card.date}
                title={card.title}
                description={card.description}
                teams={card.teams}
                status={card.status}
              />
            ))}
      </div>
    </>
  );
};

export default MainContent;
