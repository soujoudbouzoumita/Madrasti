import React, { useState } from "react";
import "./Important.css";

const ImportantNotes = () => {
  // Base de données statique des notes
  const notes = [
    {
      id: 1,
      title: "Examen Final Mathématiques",
      description: "Préparez les élèves pour l'examen final de mathématiques.",
      details: "L'examen couvre les chapitres 1 à 10. Apportez tous les documents nécessaires.",
      timestamp: "2024-11-25 10:00",
    },
    {
      id: 2,
      title: "Réunion des Enseignants",
      description: "Planification de la prochaine session.",
      details: "Date : 2024-12-01. La réunion abordera les objectifs pour le prochain semestre.",
      timestamp: "2024-11-24 15:00",
    },
    {
      id: 3,
      title: "Projet Scientifique",
      description: "Organiser une session de présentation pour les projets scientifiques.",
      details: "Chaque groupe doit présenter un projet de 10 minutes suivi d'une discussion.",
      timestamp: "2024-11-28 14:00",
    },
    {
      id: 4,
      title: "Conférence sur l'Intelligence Artificielle",
      description: "Présentation des dernières avancées en IA.",
      details: "La conférence aura lieu dans l'amphithéâtre principal. Apportez vos notes.",
      timestamp: "2024-12-02 09:00",
    },
  ];

  // État pour gérer les détails affichés
  const [expandedNoteId, setExpandedNoteId] = useState(null);

  // Fonction pour basculer les détails
  const toggleDetails = (noteId) => {
    setExpandedNoteId((prev) => (prev === noteId ? null : noteId));
  };

  return (
    <div className="notes-container">
      <h2>Notes Importantes</h2>

      {notes.length > 0 ? (
        <ul className="notes-list">
          {notes.map((note) => (
            <li key={note.id} className="note-item">
              <div className="note-title">{note.title}</div>
              <div className="note-description">
                {note.description.length > 100
                  ? note.description.slice(0, 100) + "..."
                  : note.description}
              </div>
              <div className="note-timestamp">{note.timestamp}</div>

              {/* Bouton Voir Plus */}
              <button
                className="view-more-button"
                onClick={() => toggleDetails(note.id)}
              >
                {expandedNoteId === note.id ? "Voir Moins" : "Voir Plus"}
              </button>

              {/* Détails supplémentaires */}
              {expandedNoteId === note.id && (
                <div className="note-details">{note.details}</div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-notes-message">Aucune note importante pour l'instant.</div>
      )}
    </div>
  );
};

export default ImportantNotes;
