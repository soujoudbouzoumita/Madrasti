import React from "react";
import "../styles/notesImportantes.css"
const ImportantNotes = () => {
  // Liste des notes importantes
  const notes = [
    {
      id: 1,
      title: "Vacances de Nouvel An",
      content: "Les vacances de Nouvel An commenceront le 20 décembre 2024 et se termineront le 5 janvier 2025. Profitez bien de vos vacances !",
      date: "2024-12-20",
    },
    {
      id: 2,
      title: "Examen de Mathématiques",
      content: "L'examen de mathématiques aura lieu le 15 décembre 2024 à 9h00. Révisez bien les calculs, les fractions et les multiplications.",
      date: "2024-12-15",
    },
    {
      id: 3,
      title: "Sortie scolaire au musée",
      content: "Une sortie scolaire aura lieu le 10 décembre 2024 au musée national de Carthage. Apportez un pique-nique et portez des vêtements confortables.",
      date: "2024-12-10",
    },
    {
      id: 4,
      title: "Rappel pour la rentrée",
      content: "La rentrée scolaire pour le deuxième trimestre aura lieu le 6 janvier 2025. Soyez prêts pour reprendre les cours !",
      date: "2025-01-06",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f9" }}>
      <h1 style={{ textAlign: "center", color: "#9b59b6" }}>Notes Importantes pour les Élèves</h1>
      
      <div style={{ marginTop: "20px" }}>
        {notes.map((note) => (
          <div
            key={note.id}
            style={{
              backgroundColor: "#d1bbe3", // Violet clair pour le fond
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderLeft: "5px solid #9b59b6", // Bordure violet plus foncé
            }}
          >
            <h3 style={{ color: "#000" }}>{note.title}</h3> {/* Texte en noir */}
            <p style={{ fontStyle: "italic", color: "#000" }}>{note.date}</p> {/* Texte en noir */}
            <p style={{ color: "#000" }}>{note.content}</p> {/* Texte en noir */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantNotes;
