import React, { useState } from "react";
import "../styles/MonthlyCalendar.css";
import MonthGrid from "../components/MonthGrid.jsx";
import EventDetails from "../components/EventDetails.jsx";
import { events } from "../components/eventsData.js";

const MonthlyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <h2>
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <MonthGrid
        year={currentYear}
        month={currentMonth}
        events={events}
        onDateClick={handleDateClick}
      />
      {selectedDate && (
        <EventDetails date={selectedDate} event={events[selectedDate]} />
      )}
    </div>
  );
};

export default MonthlyCalendar;
