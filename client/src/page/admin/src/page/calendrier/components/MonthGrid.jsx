import React from "react";
import "../styles/MonthGrid.css";

const MonthGrid = ({ year, month, events, onDateClick }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="empty-cell"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = `${year}-${month + 1}-${day}`;
    const hasEvent = events[dateKey];

    days.push(
      <div
        key={dateKey}
        className={`day-cell ${hasEvent ? "has-event" : ""}`}
        onClick={() => onDateClick(dateKey)}
      >
        <span>{day}</span>
      </div>
    );
  }

  return <div className="month-grid">{days}</div>;
};

export default MonthGrid;
