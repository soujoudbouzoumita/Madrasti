import React, { useState } from "react";
import { jsPDF } from "jspdf";
import '../styles/releveDeNots.css'
const Bulletin = () => {
  // État pour les notes et coefficients des matières, divisées en semestres
  const [notes, setNotes] = useState({
    semestre1: [
      { matière: "Mathématiques", note: 15, coefficient: 3 },
      { matière: "Français", note: 12, coefficient: 2 },
      { matière: "Histoire", note: 14, coefficient: 2 },
      { matière: "Sciences", note: 16, coefficient: 3 },
      { matière: "Anglais", note: 13, coefficient: 2 },
      { matière: "Dessin", note: 18, coefficient: 1 },
      { matière: "Sport", note: 17, coefficient: 1 },
      { matière: "Arabe", note: 16, coefficient: 2 },
      { matière: "Géographie", note: 14, coefficient: 2 }
    ],
    semestre2: [
      { matière: "Mathématiques", note: 16, coefficient: 3 },
      { matière: "Français", note: 13, coefficient: 2 },
      { matière: "Histoire", note: 15, coefficient: 2 }
      // Les autres matières sont laissées sans note
    ]
  });

  // Calcul de la moyenne pondérée pour un semestre
  const calculateMoyenne = (semestre) => {
    const totalCoefficient = semestre.reduce((acc, note) => acc + note.coefficient, 0);
    const totalNotes = semestre.reduce((acc, note) => acc + note.note * note.coefficient, 0);
    return totalCoefficient ? (totalNotes / totalCoefficient).toFixed(2) : 0;
  };

  // Fonction pour générer et télécharger le PDF (semestre 1 uniquement)
  const downloadSemestre1PDF = () => {
    const doc = new jsPDF();

    // Titre
    doc.setFontSize(18);
    doc.text("Bulletin de Notes - Semestre 1", 20, 20);

    // Semestre 1 : Tableau des notes
    let yPosition = 30;
    doc.setFontSize(12);
    doc.text("Semestre 1", 20, yPosition);
    yPosition += 10;

    // Tableau Semestre 1
    doc.autoTable({
      startY: yPosition,
      head: [["Matière", "Note", "Coefficient", "Note Pondérée"]],
      body: notes.semestre1.map((note) => [
        note.matière,
        note.note,
        note.coefficient,
        (note.note * note.coefficient).toFixed(2)
      ])
    });

    // Moyenne Semestre 1
    yPosition = doc.lastAutoTable.finalY + 10;
    doc.text(`Moyenne Semestre 1: ${calculateMoyenne(notes.semestre1)} / 20`, 20, yPosition);

    // Télécharger le fichier PDF
    doc.save("bulletin_semestre_1.pdf");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f5fa" }}>
      <h1 style={{ textAlign: "center", color: "#6a4c9c" }}>Bulletin de Notes</h1>

      {/* Affichage du tableau pour Semestre 1 */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Semestre 1</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Matière</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Note</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Coefficient</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Note Pondérée</th>
            </tr>
          </thead>
          <tbody>
            {notes.semestre1.map((note, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{note.matière}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{note.note}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{note.coefficient}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                  {(note.note * note.coefficient).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Moyenne Semestre 1: {calculateMoyenne(notes.semestre1)} / 20</h3>
      </div>

      {/* Affichage du tableau pour Semestre 2 */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Semestre 2</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Matière</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Note</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Coefficient</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>Note Pondérée</th>
            </tr>
          </thead>
          <tbody>
            {notes.semestre2.map((note, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{note.matière}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{note.note}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{note.coefficient}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                  {note.note ? (note.note * note.coefficient).toFixed(2) : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Moyenne Semestre 2: -</h3>
      </div>

      {/* Affichage de la moyenne générale */}
      <h3>Moyenne Générale: -</h3>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={downloadSemestre1PDF}
          style={{
            backgroundColor: "#6a4c9c",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Soumettre et Télécharger le bulletin de Semestre 1
        </button>
      </div>
    </div>
  );
};

export default Bulletin;
