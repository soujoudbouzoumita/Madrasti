import React from "react";
import "../styles/EventDetails.css";

const EventDetails = ({ date, event }) => {
  const [year, month, day] = date.split("-");
  return (
    <div className="event-details">
      <h2>Détails de l'Événement</h2>
      <p>
        <strong>Date : </strong> {`${day}/${month}/${year}`}
      </p>
      {event ? (
        <p>
          <strong>Événement : </strong> {event.title}
        </p>
      ) : (
        <p>Aucun événement pour cette date.</p>
      )}
    </div>
  );
};

export default EventDetails;
