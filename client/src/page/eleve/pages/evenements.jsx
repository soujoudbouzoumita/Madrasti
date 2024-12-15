import React, { useState } from "react";
import "../styles/evenements.css";

// Données des événements avec description
const events = [
  { id: 1, title: "Fête de bienvenue", type: "social", date: "2024-12-01", description: "C'est une fête organisée pour accueillir les nouveaux étudiants." },
  { id: 2, title: "Conférence IA", type: "conference", date: "2024-12-05", description: "Une conférence sur les dernières avancées en intelligence artificielle." },
  { id: 3, title: "Soirée des talents", type: "social", date: "2024-12-10", description: "Un événement pour mettre en valeur les talents des étudiants." },
  { id: 4, title: "Conférence sur la cybersécurité", type: "conference", date: "2024-12-15", description: "Conférence sur les meilleures pratiques en cybersécurité." },
];

function Events() {
  const [filter, setFilter] = useState("all");
  const [hoveredEventId, setHoveredEventId] = useState(null);

  // Fonction pour filtrer les événements
  const filteredEvents = filter === "all" ? events : events.filter(e => e.type === filter);

  return (
    <div className="events-container">
      <h2>Événements à l'École</h2>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>Tous</button>
        <button onClick={() => setFilter("social")} className={filter === "social" ? "active" : ""}>Sociaux</button>
        <button onClick={() => setFilter("conference")} className={filter === "conference" ? "active" : ""}>Conférences</button>
      </div>
      <div className="events-list">
        {filteredEvents.map(event => (
          <div 
            key={event.id} 
            className={`event-card ${event.type}`} 
            onMouseEnter={() => setHoveredEventId(event.id)}
            onMouseLeave={() => setHoveredEventId(null)}
          >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            {hoveredEventId === event.id && <p className="event-description">{event.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
