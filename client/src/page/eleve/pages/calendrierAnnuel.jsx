import React, { useState, useEffect } from 'react';
import '../styles/calendrierAnnuel.css';

// Données statiques (simulant une base de données)
const donnees = [
  { date: '2024-09-02', evenements: ['Rentrée universitaire/Démarrage de cours', 'D.C/J.int'] },
  { date: '2024-09-15', evenements: ['Examen de mathématiques'] },
  { date: '2024-12-25', evenements: ['Noël'] },
  { date: '2024-05-01', evenements: ['Fête du Travail'] },
];

function Calendrier() {
  const [evenementsParMois, setEvenementsParMois] = useState({});

  useEffect(() => {
    const eventsByMonth = {};

    donnees.forEach((item) => {
      const date = new Date(item.date);
      const mois = date.toLocaleString('default', { month: 'long', year: 'numeric' });

      if (!eventsByMonth[mois]) {
        eventsByMonth[mois] = [];
      }

      item.evenements.forEach((evenement) => {
        eventsByMonth[mois].push({ evenement, date: item.date });
      });
    });

    setEvenementsParMois(eventsByMonth);
  }, []);

  return (
    <div className="calendrier-container">
      <h2>Calendrier des Événements</h2>

      <div className="calendrier">
        {Object.keys(evenementsParMois).map((mois, index) => (
          <div key={index} className="mois">
            <h3>{mois}</h3>
            <ul className="evenements">
              {evenementsParMois[mois].map((evenement, idx) => (
                <li key={idx} className="evenement">
                  <span className="evenement-nom">{evenement.evenement}</span>
                  <span className="evenement-date">{evenement.date}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendrier;
